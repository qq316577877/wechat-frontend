/**
 * 新增供应商
 * Created by zong on 2017/9/5
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";
import addressLinkCom from "@/components/addressLink/addressLinkCom";

export default {
	name: 'Addsupplier',
	components: {
		addressLinkCom
	},
	data() {
		return {
			asup_username: '',
			asup_telname: '',
			tel_country: '086',
			asup_phone: '',
			asupPostalCode: '',
			asup_detail: '',
			AddressValue: '',
			addressObj: {
				provinceVal: '',
				cityVal: '',
				ereaVal: ''
			}
		}
	},
	methods: {
		init: function() {
			//判断id是否存在，确定是新增还是修改
			var id = this.$route.params.id;
			if(id) {
				httpRequest({
					url: "/wechat/supplier",
					router: this,
					success: (response) => {
						var supplierList = response.data.supplierList;
						for(var i = 0; i < supplierList.length; i++) {
							if(supplierList[i].id == id) {
								this.asup_username = supplierList[i].supplierName;
								this.asup_telname = supplierList[i].supplierContact;
								this.tel_country = (supplierList[i].cellPhone).split("-")[0];
								this.asup_phone = (supplierList[i].cellPhone).split("-")[1];
								this.asupPostalCode = supplierList[i].zipCode;
								this.asup_detail = supplierList[i].address
								// 赋值
								this.addressObj = Object.assign({}, this.addressObj, {
									provinceVal: supplierList[i].provinceId,
									cityVal: supplierList[i].cityId,
									ereaVal: supplierList[i].districtId
								});
							}
						}

					},
					complete: () => {

					}
				});

			}
		},
		//保存
		msgFunc: function() {
			if(this.asup_username == '') {
				Toast({
					message: '供应商不能为空',
					position: 'middle',
					duration: 2000
				});
				return;
			};

			if(this.asup_telname == '') {
				Toast({
					message: '供应商联系人不能为空',
					position: 'middle',
					duration: 2000
				});
				return;
			};

			if(!Helpers.checkPhone(this.asup_phone)) {
				Toast({
					message: '请输入正确的手机号',
					position: 'middle',
					duration: 2000
				});
				return;
			};
			if(!Helpers.checkZcode(this.asupPostalCode)) {
				Toast({
					message: '请输入正确的邮政编码',
					position: 'middle',
					duration: 2000
				});
				return;
			};
			if(this.asup_detail == '') {
				Toast({
					message: '请输入详细的收货地址',
					position: 'middle',
					duration: 2000
				});
				return;
			}

			//提交
			Indicator.open();
			var id = this.$route.params.id;
			if(!id) {
				httpRequest({
					url: "/wechat/supplier/add_user_supplier_information_ajax",
					params: {
						supplierName: this.asup_username,
						supplierContact: this.asup_telname,
						countryId: 1,
						provinceId: this.AddressValue.provinceVal,
						cityId: this.AddressValue.cityVal,
						districtId: this.AddressValue.ereaVal,
						address: this.asup_detail,
						zipCode: this.asupPostalCode,
						cellPhone: this.tel_country + '-' + this.asup_phone
					},
					success: (response) => {
						if(response.code == 200) {
							MessageBox.alert('添加成功').then(action => {
								this.$router.push('supplier');
							});
						};
					},
					complete: () => {
						Indicator.close();
					}
				});
			} else {
				httpRequest({
					url: "/wechat/supplier/update_user_supplier_information_ajax",
					params: {
						id: id,
						supplierName: this.asup_username,
						supplierContact: this.asup_telname,
						countryId: 1,
						provinceId: this.AddressValue.provinceVal,
						cityId: this.AddressValue.cityVal,
						districtId: this.AddressValue.ereaVal,
						address: this.asup_detail,
						zipCode: this.asupPostalCode,
						cellPhone: this.tel_country + '-' + this.asup_phone
					},
					success: (response) => {
						if(response.code == 200) {
							this.$router.push('supplier');
						}
					},
					complete: () => {
						Indicator.close();
					}
				});
			};
		},
		getAddressValue: function(data) {
			this.AddressValue = data;
		}
	},
	created: function() {
		this.init()
	}
}