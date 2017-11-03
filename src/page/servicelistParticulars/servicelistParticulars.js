/**
 * 贷款列表详情
 * Created by yangdezong on 2017/9/2.
 */

import {Toast, Indicator,MessageBox } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import Filter from "../../common/filter.js";
import moment from "moment";

export default {
	name: 'ServiceListParticulars',
	data() {
		return {
			particularsLsit: '',
			show:false
		}
	},
	methods: {
		init: function() {
			Indicator.open();
			httpRequest({
				url: "/wechat/loan/info/get_loan_info_details_ajax",
				params: {
					id:this.$route.params.id
				},
				success: (response) => {
					if(response.data.status==1){

						this.show=true;
					}
					if(response.data) {
						this.particularsLsit = response.data;
					}
				},
				complete: () => {
					Indicator.close();
				}
			});

		}
	},
	filters:Filter,
	created() {
		this.init();

	}

}
