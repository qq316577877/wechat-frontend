/**
 * 明细(详情)
 * Created by zong on 2017/9/19
 */

import { MessageBox, Indicator, Toast } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import Helpers from "../../common/helpers.js";
import Filter from "../../common/filter.js";
import moment from "moment";

export default {
	name: 'detailsIndent',
	data() {
		return {
			showList: true,
			submitShow: false,
			statusShow: "",
			pageIndex: 1,
			showNull: "",
			needLoan: "",
			readChecked: false,
			detailsItem: "",
			goodsInfoList: "",
			typeShow: "",
			loanLimit: "",
			loanAmount: 0,
			submittedSuccessfully: true,
			orderNo: sessionStorage.getItem("orderNo"),
			pactUrl: "",
			disabled: false
		}
	},
	methods: {
		init: function() {
			Indicator.open();
			httpRequest({
				url: "/neworder/center/order_detail_ajax",
				params: {
					orderNo: this.orderNo
				},
				success: (response) => {
					console.log("详情", response);
					if(response.code == 200) {
						this.detailsItem = response.data;
						this.goodsInfoList = this.detailsItem.goodsInfoList;
						this.loanLimit = this.detailsItem.loanLimit;
						this.needLoan = this.detailsItem.needLoan;
						if(this.needLoan == 0) {
							this.disabled = true;
						}
						//订单未审核状态1
						if(this.detailsItem.status == 1) {
							this.statusShow = true;
							if(this.detailsItem.goodsInfoList.length == 0) {
								this.typeShow = true;
							} else {
								this.typeShow = false;
							};
						} else
						//订单审核已通过
						{
							this.getBargain();
							this.statusShow = false;
							this.submitShow = true;
							//订单审核已通过并 签订合同
							if(this.detailsItem.status >= 3) {
								this.submittedSuccessfully = false;
								this.readChecked = true;
								this.loanAmount = this.detailsItem.loanAmount;
								//								document.getElementsByClassName("input_box")[0].setAttribute('disabled','disabled');
								//								document.getElementById("inputbox").disabled=false;
							}
						}

					}
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		cancelFn: function() {
			MessageBox.confirm('确定取消该订单?').then(action => {
				Indicator.open();
				httpRequest({
					url: "/neworder/center/order_cancle_ajax",
					params: {
						orderNo: this.orderNo,
						channel: this.detailsItem.channel
					},
					success: (response) => {
						if(response.code == 200) {
							MessageBox.alert('成功取消!').then(action => {
								this.$router.push('/detailsList');
								this.$route.meta.keepAlive = false;
							});
						}
					},
					complete: () => {
						Indicator.close();
					}
				});
			});
		},
		submitFn: function() {
			if(this.loanAmount === "") {
				Toast({
					message: '请输入您要贷款的金额',
					position: 'middle',
					duration: 2000
				});
				return;
			};
			if(this.loanLimit - this.loanAmount < 0) {
				Toast({
					message: '您的申请金额不可大于可用额度',
					position: 'middle',
					duration: 2000
				});
				return;
			};

			if(!Helpers.checkMoneyZS(this.loanAmount)) {
				Toast({
					message: '请输入正确的金额格式(只能是正整数)',
					position: 'middle',
					duration: 2000
				});
				return;
			};
			if(this.loanAmount % 1000 != 0) {
				Toast({
					message: '金额只能输入1000的整数倍',
					position: 'middle',
					duration: 2000
				});
				return;
			};
			if(!this.readChecked) {
				Toast({
					message: '您未同意采购服务',
					position: 'middle',
					duration: 2000
				});
				return;
			};
			if(Helpers.anXinQian(this)) {
				MessageBox.confirm('确定提交该订单?').then(action => {
					this.$router.push("orderSubmit");
					sessionStorage.setItem("loanAmount", this.loanAmount);
				});
			} else {MessageBox.alert('提交订单前需要开通安心签账号!').then(action => {
							});
			}
		},
		//		查看合同
		getBargain: function() {
			httpRequest({
				url: "/neworder/center/contract/view",
				params: {
					orderNo: this.orderNo
				},
				success: (response) => {
					console.log("hetong", response);
					if(response.code == 200) {
						this.pactUrl = response.data.contractPath;
					}

				},
				complete: () => {}
			});
		},
		purchasingUrl:function(){
			if(this.pactUrl){
				location.href=this.pactUrl;
			}else{
				Toast({
					message: '查看采购合同失败，合同还未创建',
					position: 'middle',
					duration: 2000
				});
			}
		}
	},
	filters: Filter,
	created() {

		this.init();
	}
}