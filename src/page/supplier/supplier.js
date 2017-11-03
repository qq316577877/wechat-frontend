/**
 * 供应商
 * Created by zong on 2017/9/5.
 */
import { Indicator, MessageBox } from 'mint-ui';
import Filter from "../../common/filter.js";
import httpRequest from "../../common/ajax.js";

export default {
	name: 'SupplierTel',
	data() {
		return {
			supplierList: "",
			show:false
		}
	},
	methods: {
		init: function() {
			Indicator.open();

			httpRequest({
				url: "/wechat/supplier",
				success: (response) => {
					if(!response.data.supplierList||response.data.supplierList.length==0){
						this.show=true;
					}
					if(response.data) {
						this.supplierList = response.data.supplierList;
					}
				},
				complete: () => {
					Indicator.close();
				}
			});

		},
		addSupplier: function() {
			this.$router.push('addSupplier');
		},
		deleteSupplier: function(id) {
			MessageBox.confirm('确定执行此操作?').then(action => {
				Indicator.open();



				httpRequest({
					url: "/wechat/supplier/delete_user_supplier_information_ajax",
					params: {
						id:id
					},
					success: (response) => {
						this.init();
					},
					complete: () => {
						Indicator.close();
					}
				});
			});
		}
	},
	created() {
		this.init();
	},
  filters:Filter
}
