/**
 * 物流
 * Created by qinmenghuan on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";

export default {
	name: 'LogisticsInfo',
	props: {
		inputValue: String
	},
	data() {
		return {
			containerId: sessionStorage.getItem("containerId"),
			logistics:"",
			TypeDesc:""
		}
	},
	methods: {
		init: function() {
			Indicator.open();

			httpRequest({
				url: "/neworder/center/logistics_detail_list_ajax",
				params: {
					containerId: this.containerId
//					containerId: 1
				},
				success: (response) => {
					console.log(response);
					this.logistics=response.data;
					this.TypeDesc=this.logistics[0].typeDesc;
				},
				complete: () => {
					Indicator.close();
				}
			});
		}
	},
	created() {

		this.init();

	}
}