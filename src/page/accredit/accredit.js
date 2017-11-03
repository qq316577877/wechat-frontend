/**
 * 微信授权
 * Created by 杨德宗 on 2017-10-18.
 */

import Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";
import { MessageBox, Toast, Indicator } from 'mint-ui';

export default {
	name: "accredit",
	data() {
		return {
			code: "",
			state: "",
			openid: ""
		}
	},
	created() {
		this.init();
	},
	methods: {
		init: function() {
			var Value = window.location.href.split("?")[1];
			var codeValue = Value.split("&")[0];
			this.code = codeValue.split("=")[1];
			var stateValue = Value.split("&")[1];
			stateValue = stateValue.split("=")[1];
			this.state = stateValue.split("#")[0];
			var openid = localStorage.getItem("openid");
			if(openid) {
				this.getUrl();
			} else {
				this.getOpenId();
			}
		},
		getOpenId: function() {
			httpRequest({
				url: "/wechat/base/login_auth_ajax",
				params: {
					code: this.code,
					state: this.state
				},
				success: (response) => {
					this.openid = response.data.openid;
					localStorage.setItem("openid", this.openid);
					this.$router.push("/" + response.data.redirect_uri);
				},
				complete: () => {}
			});
		},
		getUrl:function(){
			httpRequest({
				url: "/wechat/base/statToUrl_ajax",
				params: {
					state: this.state
				},
				success: (response) => {
					this.$router.push("/" + response.data.redirect_uri);
				},
				complete: () => {}
			});
		}
	}
}