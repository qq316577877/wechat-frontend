/**
 * 明细(列表)
 * Created by zong on 2017/9/18
 */

import { Indicator } from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import Filter from "../../common/filter.js";
import moment from "moment";

export default {
	name: 'detailsList',
	data() {
		return {
			showList: true,
			pageNo: 1,
			showNull: false,
			indentList: "",
			number: "",
			containerList: "",
			selected: 0,
			selecteds: 0,
			btnType: "",
			btnType2: ""
		}
	},
	methods: {
		//点击订单按钮
		typeIndent: function(index) {
			this.selecteds = index;
			this.selected = 0;
			this.showList = true;
			this.indentAjax();
			this.indentStatus();
		},
		//点击货柜按钮
		typeContainer: function(index) {
			this.selecteds = index;
			this.selected = 0;
			this.showList = false;
			this.counterAjax();
			this.counterStatus();
		},
		//点击状态筛选按钮
		statusBtn: function(index, status) {
			//			console.log(status)
			this.selected = index;
			if(this.selecteds == 0) {
				this.indentAjax(status);
			} else if(this.selecteds == 1) {
				this.counterAjax(status);
			}
		},
		//获取订单数据
		indentAjax: function(status) {
			var status = status || 1;
			Indicator.open();

			httpRequest({
				url: "/neworder/center/find_order_byPage_ajax",
				params: {
					pageNo: this.pageNo,
					pageSize: 100,
					status: status
				},
				success: (response) => {
					//					console.log(response);
					if(!response.data.list || response.data.list.length == 0) {
						this.showNull = true;
					} else {
						this.showNull = false;
					};
					if(response.data.list) {
						this.indentList = response.data.list;
					} else {
						this.indentList = "";
					};
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		indentStatus: function() {
			Indicator.open();

			httpRequest({
				url: "/neworder/center/get_order_status_ajax",
				success: (response) => {
					//					console.log(response);
					if(response.code == 200) {
						this.btnType = response.data;
					}
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		counterAjax: function(status) {
			var status = status || 1;
			Indicator.open();

			httpRequest({
				url: "/neworder/center/find_container_byPage_ajax",
				params: {
					pageNo: this.pageNo,
					pageSize: 100,
					status: status
				},
				success: (response) => {
					console.log(response);
					if(!response.data.list) {
						this.showNull = true;
					} else {
						this.showNull = false;
					};
					if(response.data.list) {
						this.containerList = response.data.list;
					} else {
						this.containerList = "";
					};
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		counterStatus: function() {
			Indicator.open();

			httpRequest({
				url: "/neworder/center/get_container_status_ajax",
				success: (response) => {
					console.log(response);
					if(response.code == 200) {
						this.btnType2 = response.data;
					}
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		shipIndent: function(data) {
			this.$router.push('detailsIndent');
			sessionStorage.setItem("orderNo", data);
		},
		shipContainer: function(data) {
			this.$router.push('detailsContainer');
			sessionStorage.setItem("containerId", data);
		}
	},
	//过滤器
	filters: Filter,
	created() {
		this.typeIndent(0);
		this.$emit("changeActive", 1);
		this.$route.meta.keepAlive = true;
	},
	activated() {
		this.$emit("changeActive", 1);
	}
}