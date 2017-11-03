/**
 * 申请贷款
 * Created by zong on 2017/9/5.
 */

import addressLinkCom from "@/components/addressLink/addressLinkCom";
import Helpers from "../../common/helpers.js";
import { MessageBox, Toast, Indicator } from 'mint-ui';
import httpRequest from "../../common/ajax.js";

export default {
	name: 'ApplyForLoan',
	components: {
		addressLinkCom
	},
	data() {
		return {
			userObj: {},
			AddressValue: "",
			addressObj: {},
			address: "",
			maritalStatus: 1,
			partnerName: "",
			partnerIdentity: "",
			checked: false,
			maritalShow: false
		}
	},
	methods: {
		init: function() {
			this.userObj = Helpers.getUserInfo();
			console.log(this.userObj);
		},
		//保存
		submitInfo: function() {
			if(this.address == '') {
				Toast({
					message: '详细地址不能为空',
					position: 'middle',
					duration: 2000
				});
				return;
			};

			if(this.maritalStatus == 2) {
				if(this.partnerName == "") {
					Toast({
						message: '已婚配偶名字/身份证必填',
						position: 'middle',
						duration: 2000
					});
					return;
				};
				if(this.partnerIdentity == "") {
					Toast({
						message: '已婚配偶名字/身份证必填',
						position: 'middle',
						duration: 2000
					});
					return;
				};
				if(!Helpers.checkIdentityInfo(this.partnerIdentity)) {
					Toast({
						message: '身份证号格式不正确',
						position: 'middle',
						duration: 2000
					});

					return;
				};

			};
			if(!this.checked) {
				Toast({
					message: '请查看并同意查询征信协议',
					position: 'middle',
					duration: 2000
				});
				return;
			};

			//提交
			Indicator.open();

			httpRequest({
				url: "/wechat/loan/auth/add_loan_user_credit_ajax",
				params: {
					username: this.userObj.username,
					identity: this.userObj.identity,
					mobile: this.userObj.mobile,
					maritalStatus: this.maritalStatus,
					partnerName: this.partnerName,
					partnerIdentity: this.partnerIdentity,
					countryId: 1,
					provinceId: this.AddressValue.provinceVal,
					cityId: this.AddressValue.cityVal,
					districtId: this.AddressValue.ereaVal,
					address: this.address
				},
				success: (response) => {
					if(response.code == 200) {
						MessageBox.alert('提交成功').then(action => {
							this.$router.push('mine');
						});
					};
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		getAddressValue: function(data) {
			this.AddressValue = data;
		},
		maritalTOrF: function() {
			if(this.maritalStatus == 2) {
				this.maritalShow = true;
			}
			if(this.maritalStatus != 2) {
				this.maritalShow = false;
				this.partnerName="";
				this.partnerIdentity="";
			}
		}
	},
	created: function() {
		this.init()
	}
}