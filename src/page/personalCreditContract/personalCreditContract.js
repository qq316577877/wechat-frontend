/**
 * 个人信用合同
 * Created by yangdezong on 2017/10/13.
 */

import Helpers from "../../common/helpers.js";
import Filter from "../../common/filter.js";
export default {
	name: 'personalCreditContract',
	data() {
		return {
			userObj: {},
			time: ""
		}
	},
	methods: {
		init: function() {
			this.userObj = Helpers.getUserInfo();
			console.log(this.userObj);
			this.time = Date.parse(new Date())
		}
	},
	created() {
		this.init();
	},
	filters: Filter
}