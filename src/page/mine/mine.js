/**
 * 我的
 * Created by qinmenghuan on 2017-08-31.
 */

import Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";
import { MessageBox, Toast, Indicator } from 'mint-ui';

export default {
	name: "MineCom",
	data() {
		return {
			isShowApplyAmount: false,
			isShowSearchContract: false,
			userIconUrl: require("../../assets/userheader.png"),
			backgroundUrl: {
				backgroundImage: "url(" + require("../../assets/mine_background.png") + ")",
				backgroundSize:"cover",
				backgroundRepeat: "no-repeat"
			},
			dataList: [{
					name: "会员认证",
					classname: "listSel usercheck",
					URL: {
						name: "PersonalTel",
						params: {
							certificationStatus: 1
						}
					},
					fontClass: "iconfont icon-wodetubiao-24"
				},
				{
					classname: "listSel",
					name: "供应商管理",
					URL: "supplier",
					fontClass: "iconfont icon-wodetubiao-13"
				},
				{
					classname: "listSel",
					name: "银行账号",
					URL: "bank",
					fontClass: "iconfont icon-wodetubiao-"
				},
				{
					classname: "listSel",
					name: "收货地址",
					URL: "address",
					fontClass: "iconfont icon-wodetubiao-6"
				},
				{
					classname: "listSel",
					name: "设置",
					URL: "setting",
					fontClass: "iconfont icon-wodetubiao-4"
				},
			],
			userInfo: {},
			authStatus: "",
			statusInfoNum: "",
			showLoans: "",
			needsLoans: false,
			isHasLoan: false,
			loansData: "",
			notThroughInfo: "",
			loansBtn: () => {
				Toast({
					message: '请先完成会员认证与实名认证',
					position: 'middle',
					duration: 2000
				});
			},
			loanText: "立即申请"
		}
	},
	created() {
		this.$emit('changeActive', 2);
		this.init();
		this.$route.meta.keepAlive = false;
	},
	filters: {
		moneyFun: function(value) {
			return value.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		}
	},
	methods: {
		init: function() {
			var userInfoObj = localStorage.getItem('userInfo');
			if(userInfoObj) {
				userInfoObj = JSON.parse(userInfoObj)
				this.userInfo = userInfoObj;
			}

			// 查询个人信息
			httpRequest({
				router: this,
				url: "/wechat/enterprise/auth/enterprise_auth_info_ajax",
				params: {},
				success: (response) => {
					if(response.code == 200) {
						//本地存储认证对象
						localStorage.setItem("authInfo", JSON.stringify(response.data));
						// 显示申请贷款
						this.showLoans = false;
						var statusInfo = response.data;
						this.authStatus = response.data.statusDesc;
						this.statusInfoNum = response.data.status;
						if(statusInfo.authInfo == '') {
							// this.authStatus = "未认证";
							//没有进行认证
							this.dataList[0].URL = {
								name: "PersonalTel",
							};
						} else if(statusInfo.authInfo.status == 2) {
							// this.authStatus = "实名认证未通过";
							//实名认证未通过
							this.dataList[0].URL = {
								name: "PersonalTel",
								params: {
									authStatus: 2
								}
							};
						} else if(statusInfo.authInfo.status == 1 && statusInfo.enterpriseInfo == '') {
							//第一步通过，第二步没有认证
							// this.authStatus = "认证未完成";
							//个人
							if(statusInfo.authInfo.type == 1) {
								this.dataList[0].URL = {
									name: "PersonalSecond",
								}
							} else {
								this.dataList[0].URL = {
									name: "AuthEnterpriseSecond",
								}
							}
						} else if(statusInfo.authInfo.status == 1 && statusInfo.enterpriseInfo.status == 4) {
							//第一步通过，第二步认证未通过（）
							this.notThroughInfo = statusInfo.enterpriseInfo.rejectNote;
							// this.authStatus = "认证未通过（" + statusInfo.enterpriseInfo.rejectNote + "）";
							//个人和企业
							if(statusInfo.authInfo.type == 1) {
								this.dataList[0].URL = {
									name: "PersonalSecond",
									params: {
										enterpriseVerifyStatus: 4
									}
								}
							} else {
								this.dataList[0].URL = {
									name: "AuthEnterpriseSecond",
									params: {
										enterpriseVerifyStatus: 4
									}
								}
							}
						} else if(statusInfo.authInfo.status == 1 && statusInfo.enterpriseInfo.status == 1) {
							// this.authStatus = "认证已通过";
							this.dataList[0].URL = {
								name: "Certification",
							};
							//认证成功跳转申请贷款页
							this.loansBtn = () => {
								this.$router.push('ApplyForLoan');
							};
							// 查看贷款详情
							this.getLoanInfo();
						} else {
							// this.authStatus = "认证审核中";
							this.dataList[0].URL = {
								name: "Certification",
							};
							//没有进行认证点击申请
							this.loansBtn = function() {
								Toast({
									message: '请先请耐心等待认证通过,方可申请贷款',
									position: 'middle',
									duration: 2000
								});
							};
						}
					}
				},
				complete: () => {}
			});

		},
		getLoanInfo: function() {
			//判断是否申请贷款
			httpRequest({
				url: "/wechat/loan/auth/get_loan_user_credit_information_ajax",
				router: this,
				success: (response) => {
					console.log("res", response)
					// 本地存储认证对象
					localStorage.setItem("credit_info", JSON.stringify(response.data));

					// 如果有数据
					if(response.data.loanUserCreditInfo) {

						// 显示贷款额度
						this.showLoans = true;
						this.loansData = response.data.loanUserCreditInfo;
						// 银行已拒绝您的授信申请
						if(response.data.loanUserCreditInfo.status == 3) {
							this.showLoans = false;
							this.loanText = "已拒绝";
							//没有进行认证点击申请
							this.loansBtn = function() {
								Toast({
									message: '银行已拒绝您的授信申请',
									position: 'middle',
									duration: 2000
								});
							};
						} else if(response.data.loanUserCreditInfo.status == 5) {
							// 如果状态为5 ，提交了申请，但未签订借款合同
							this.loansData.balance = "0.00";
							this.isShowApplyAmount = true;
							this.isShowSearchContract = false;
						}
						// 申请贷款审核中
						else if(response.data.loanUserCreditInfo.status == 6) {
							this.loansData.balance = "0.00";
						} // 申请贷款和签订借款合同都过了
						else if(response.data.loanUserCreditInfo.status == 1) {
							this.isShowApplyAmount = false;
							this.isShowSearchContract = true;
						}
					};
					if(!response.data) {
						// 显示贷款额度
						this.showLoans = false;
					};

				},
				complete: () => {}
			});
		},
		// 我的申请列表
		myLoanApply: function() {
			this.$router.push('/loanAplication');
		},
		// 我的贷款列表
		myLoanAmount: function() {
			this.$router.push('/servicelist');
		},
		watchInfo: function() {
			MessageBox('未通过理由', this.notThroughInfo);
		},
		//获取贷款判断安心签是否开户
		shipUrl: function() {
			if(Helpers.anXinQian(this)) {
				this.$router.push('/signContract');
			}
		}
	}
}