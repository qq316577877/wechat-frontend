// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Weixin from './Weixin';
import router from './router';
import Helpers from "./common/helpers.js";
require('./lib/lib-flexible.js');
import Mint from 'mint-ui';
Vue.use(Mint);
import './lib/iconfont/iconfont.css';
import 'mint-ui/lib/style.min.css';
import axios from 'axios';
import constants from "./common/constants.js";
Vue.use(require('vue-wechat-title'));
import moment from "moment";
Vue.prototype.$moment = moment;

import { Toast } from 'mint-ui';

Vue.config.productionTip = false;

new Vue({
	strict: false,
	el: '#app',
	router,
	template: '<Weixin/>',
	watch: {
		'$route': function(newRoute, oldRoute) {
			// 普通页面
			if(newRoute.name != "Register" && newRoute.name != "findPwdTel" && newRoute.name != "findPwdSecondTel") {
				// 如果未登录  跳转到登录页
				if(!Helpers.isLogin()){
					this.$router.push('login');
				}
			}
			// 下单页面如果未实名认证会员则，跳转到会员认证
			if(newRoute.name == "createOrder") {

//				var createOrderFlag = Helpers.MembershipAuth(this);
//				console.log("createOrderFlag:", createOrderFlag);
				// var authInfo=Helpers.getUserAuthInfo();
				// // 如果还没实名认证，则进我的
				// if(authInfo.status!=11){
				//   Toast({
				//     message: '请先完成会员认证与实名认证',
				//     position: 'middle',
				//     duration: 2000
				//   });
				//   // 跳转到我的
				//   this.$router.push('mine');
				// }

			}
		}
	},
	components: {
		Weixin
	},
	// 创建后
	created() {
//		if(!Helpers.isLogin()) {
//			this.$router.push('login');
//		};
		// code需要从url解析
//		var codeValue=window.location.href.split("?")[1];
//			codeValue=codeValue.split("&")[0];
//			codeValue=codeValue.split("=")[1];
//			httpRequest({
//				url: "/wechat/base/login_auth_ajax",
//				params: {
//					code:codeValue,
//					state:1
//				},
//				success: (response) => {
//					alert(response.data.userInfo);
//					alert(response.data.redirect_uri);
//				},
//				complete: () => {
//				}
//			});
		// 如果初次加载，则判断自动登录
		// axios.get(constants.baseUrl+'/wechat/base/login_auth_ajax?code='+code)
		// .then(function (response) {
		//   console.log("response:",response);
		//   // 如果http请求成功
		//   if(response.status==200){
		//     // 如果接口请求成功
		//     if(response.data.code==200){
		//       var reponseObj=response.data.data;
		//       // 如果用户存在
		//       if(reponseObj.userId&&reponseObj.userId!=""){
		//         localStorage.setItem("userInfo", JSON.stringify(response.data));
		//         // 跳转到首页
		//         this.$router.push('/mine');
		//       }else{
		//         this.$router.push('/login');
		//       }
		//     }
		//   }
		// })
		// .catch(function (error) {
		//   console.log(error);
		// });

	}
})