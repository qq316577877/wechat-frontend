/**
 * 货柜(详情)
 * Created by zong on 2017/9/28
 */

import { MessageBox, Indicator, Toast } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import Filter from "../../common/filter.js";
import moment from "moment";

export default {
	name: 'DetailsContainer',
	data() {
		return {
			addressData: "",
			item: "",
			containerGoodsList: "",
			setContract:false,
			containerId: sessionStorage.getItem("containerId")
		}
	},
	methods: {
		init: function() {
			Indicator.open();

			httpRequest({
				url: "/neworder/center/container_detail_ajax",
				params: {
					containerId: this.containerId
				},
				success: (response) => {
					console.log("货柜详情", response);
					if(response.code == 200) {
						this.item = response.data;
						this.addressData = this.item.deliveryAdress;
						this.containerGoodsList = this.item.containerGoodsList;
						if(this.item.status !=1){
							this.setContract=true;
						}
					}
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		logistics:function(){
			this.$router.push('logistics');
		}
	},
	filters: Filter,
	created() {

		this.init();

	}
}