/**
 * 贷款列表
 * Created by zong on 2017/9/5.
 */

import { Indicator } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import Filter from "../../common/filter.js";
import moment from "moment";

export default {
	name: 'ServiceList',
	data() {
		return {
			serviceList: {},
			usedAmount: "",
			//			serviceListAll:{},
			showLoans: false,
			showNull: false,
			pageIndex: 1
		}
	},
	methods: {
		init: function() {
			Indicator.open();
			httpRequest({
				url: "/wechat/loan/info/get_loan_info_list_service_ajax",
				params: {
					pageIndex: this.pageIndex,
					pageSize: 10,
					keyword: "",
					status: -1
				},
				success: (response) => {
					console.log(response.data);
					if(response.data.loanListPage.list.length == 0) {
						this.showNull = true;
					} else {
						this.showLoans=true;
						this.serviceList = response.data.loanListPage.list;
						this.usedAmount = response.data.usedAmount;
					}

				},
				complete: () => {
					Indicator.close();
				}
			});

		}
		//,
		//		loadMore:function() {
		//			this.pageIndex++
		//			this.init();
		//		}
	},
	filters: Filter,
	created() {

		//		var alist=[{a:"aa"}];
		//		var blist=[{a:"bb"}];
		//		
		//		console.log(alist.concat(blist));

		this.init();

	}

}