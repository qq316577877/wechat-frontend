/**
 * 订单授权提交
 * Created by zong on 2017/9/19
 */

import { MessageBox, Indicator, Toast } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import Helpers from "../../common/helpers.js";
import Filter from "../../common/filter.js";
import moment from "moment";
var timer, num = 60;
export default {
	name: 'orderSubmit',
	data() {
		return {
			userTel: "",
			codeNum: "",
			orderNo: sessionStorage.getItem("orderNo"),
			loanAmount: sessionStorage.getItem("loanAmount")
		}
	},
	methods: {
		init: function() {
			Indicator.open();
			httpRequest({
				url: "/wechat/user/info/get_user_information_ajax",
				success: (response) => {
					console.log(response);
					if(response.code == 200) {
						this.userTel = response.data.mobile;
					};
				},
				complete: () => {
					Indicator.close();
				}
			});

			if(timer) {
				clearInterval(timer); //一定清理
				num = 60
			};

		},
		getCode: function() {
			Indicator.open();
			httpRequest({
				url: "/neworder/center/order_send_anxin_ajax",
				params: {
					orderNo: this.orderNo
				},
				success: (response) => {
					if(response.code == 200) {
						if(timer) {
							clearInterval(timer); //一定清理
							num = 60
						};
						// 禁用发短信按钮
						document.querySelector('#btn-passage').disabled = true; //不要再禁用了
						document.querySelector('#btn-passage').style.color = '#ccc';
						timer = setInterval(function() {
							num--;
							document.querySelector('#btn-passage').innerHTML = (num + "秒后重发");
							if(num === 0) {
								clearInterval(timer); //一定清理
								document.querySelector('#btn-passage').innerHTML = ('获取验证码');
								document.querySelector('#btn-passage').disabled = false; //不要再禁用了
								num = 60;
								document.querySelector('#btn-passage').style.color = '#009148';
							}
						}, 1000);
					}
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		cancelFn: function() {
			MessageBox.confirm('确定取消该订单授权?').then(action => {
				MessageBox.alert('成功取消!').then(action => {
					this.$router.push('/detailsList');
				});
			});
		},
		submitAccredit: function() {
			if(!this.codeNum) {
				Toast({
					message: '短信验证码不能为空',
					position: 'middle',
					duration: 2000
				});
				return;
			};
			//短信验证码
			if(!Helpers.checkCapth(this.codeNum)) {
				Toast({
					message: '请输入正确的验证码',
					position: 'middle',
					duration: 2000
				});

				return;
			};

			MessageBox.confirm('确定授权该订单?').then(action => {
				Indicator.open();
				httpRequest({
					url: "/neworder/center/confirm_submit_ajax",
					params: {
						orderNo: this.orderNo,
						loanAmount: this.loanAmount,
						captchaCode: this.codeNum
					},
					timeout: 30000,
					success: (response) => {
						console.log(response);
						if(response.code == 200) {
							MessageBox.alert('授权成功!').then(action => {
								this.$router.push('/detailsList');
								if(timer) {
									clearInterval(timer); //一定清理
								};
								this.$route.meta.keepAlive=false;
							});
						}
					},
					complete: () => {
						Indicator.close();
					}
				});
			});
		}
	},
	filters: Filter,
	created() {

		this.init();

	}

}