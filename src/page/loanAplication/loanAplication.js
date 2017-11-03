/**
 * 申请列表
 * Created by zong on 2017/9/2.
 */

import { Toast, Indicator, MessageBox } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import Filter from "../../common/filter.js";
import moment from "moment";


export default {
	name: 'LoanAplication',
	data() {
		return {
			loanAplication: '',
			show:false
		}
	},
	methods: {
		init: function() {
			Indicator.open();

			httpRequest({
				url: "/wechat/loan/info/get_loan_info_list_apply_ajax",
				params: {
					pageIndex: 1,
					pageSize: 10,
					keyword: "",
					status: -1
				},
				success: (response) => {
					console.log(response);
					if(response.data.list.length==0){
						this.show=true;
					}
					if(response.data) {
						this.loanAplication = response.data.list;
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