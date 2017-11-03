/**
 * 签订合同
 * Created by zong on 2017/7/22.
 */

import { MessageBox, Indicator, Toast } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import pdf from 'vue-pdf';

var timer, num = 60;
export default {
	name: 'signContract',
	components: {
		'pdf': pdf
	},
	data() {
		return {
			pdfList: [
				'https://ovft-file-test.oss-cn-hangzhou.aliyuncs.com/201708301628059619.pdf?Expires=1505726025&OSSAccessKeyId=LTAIMsY9iRDZN9vo&Signature=RwSR1hr3bewTBQGiJDmo8nQjZVw%3D'
			],
			src: '',
			loadedRatio: 0,
			page: 1,
			numPages: 0,
			rotate: 0,
			maskShow: false,
			captchaCode: "",
			contractId: "",
			contractUrl: "",
			tel: ""
		}
	},
	methods: {
		password: function(updatePassword, reason) {
			updatePassword(prompt('password is "test"'));
		},
		error: function(err) {

			// console.log(err);
		},
		changeBeforePage: function() {
			if(this.page > 1) {
				this.page = this.page - 1;
			}
		},
		changeAfterPage: function() {
			if(this.page < this.numPages) {
				this.page = this.page + 1;
			}
			console.log("1");
		},
		init: function() {
			Indicator.open();
			httpRequest({
				url: "/wechat/loan/contract/borrow_ajax",
				success: (response) => {
					console.log(response);
					if(response.data) {
						this.contractId = response.data.contractId;
						this.contractUrl = response.data.contractPath;
					};
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		close: function() {
			this.maskShow = false;
		},
		sureSigned: function() {
			this.maskShow = true;
			Indicator.open();

			httpRequest({
				url: "/wechat/enterprise/auth/enterprise_auth_info_ajax",
				success: (response) => {
					console.log(response);
					if(response.data) {
						this.tel = response.data.authInfo.mobile;
					};
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		getCapth: function() {
			Indicator.open();

			httpRequest({
				url: "/wechat/loan/contract/captcha_send_ajax",
				success: (response) => {
					console.log(response);
					if(response.code == 200) {
						if(timer) {
							clearInterval(timer); //一定清理
							num = 60
						}
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
								document.querySelector('#btn-passage').style.color = '#00aa5c';
							}
						}, 1000);
					}
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		accredit: function() {
			if(this.captchaCode == '') {
				Toast({
					message: '请输入短信验证码',
					position: 'middle',
					duration: 2000
				});
				return;
			};

			Indicator.open();
			httpRequest({
				router: this,
				url: '/wechat/loan/contract/online_sign_ajax',
				params: {
					captchaCode: this.captchaCode,
					contractId: this.contractId
				},
				success: (response) => {
					if(response.code == 200) {
						if(timer) {
							clearInterval(timer);
						};
						MessageBox.alert('授权成功!').then(action => {
							this.$router.push('/mine');
						});
					}
				},
				complete: () => {
					Indicator.close();
				}
			})
		},
		viewerContract:function(){
			if(this.contractUrl==""|| !this.contractUrl){
				Toast({
					message: '您的合同信息客户经理正在快马加鞭的录入哦，请稍后尝试!',
					position: 'middle',
					duration: 2000
				});
			}else{
				location.href=this.contractUrl;
			}
		}
	},
	created() {
		this.init();
	}
}