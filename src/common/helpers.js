/**
 *  共同方法
 * Created by qinmenghuan on 2017-08-28.
 */

import { Toast } from 'mint-ui';
import moment from "moment";

export default {
	// 校验输入是否是金额
	checkMoney: function(money) {
		if(!(/^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/.test(money))) {
			return false;
		} else {
			return true;
		}
	},
	// 校验输入是否是整数金额
	checkMoneyZS: function(money) {
		if(!(/^\d+$/.test(money))) {
			return false;
		} else {
			return true;
		}
	},
	// 校验手机号
	checkPhone: function(phonenum) {
		if(!(/^1[34578]\d{9}$/.test(phonenum))) {
			return false;
		} else {
			return true;
		}
	},
	// 校验密码
	checkPassword: function(password) {
		var pwdstr = password;
		if(pwdstr == null || pwdstr == "" || pwdstr.length < 6 || pwdstr.length > 20) {
			return false;
		}
		// 密码必须包含数字和字母
		var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
		if(reg.test(password)) {
			return true;
		} else {
			return false;
		}
	},

	// 校验验证码
	checkCapth: function(capth) {
		var pwdstr = capth;
		if(pwdstr == null || pwdstr == "" || pwdstr.length != 6) {
			return false;
		}
		var reg = new RegExp(/[0-9]{6}/);
		if(reg.test(capth)) {
			return true;
		} else {
			return false;
		}
	},
	// 校验邮政编码
	checkZcode: function(capth) {
		var pwdstr = capth;
		if(pwdstr == null || pwdstr == "") {
			return false;
		}
		var reg = new RegExp(/^[0-9]{6,10}$/g);
		if(reg.test(capth)) {
			return true;
		} else {
			return false;
		}
	},
	// 校验银行卡号
	checkBankCard: function(capth) {
		var pwdstr = capth;
		if(pwdstr == null || pwdstr == "") {
			return false;
		}
		var reg = new RegExp(/^[0-9]{16,21}$/);
		if(reg.test(capth)) {
			return true;
		} else {
			return false;
		}
	},
	// 判断登陆
	isLogin: function() {
		var userInfoObj = localStorage.getItem('userInfo');
		//console.log("userinfo:",userInfoObj);
		if(userInfoObj && userInfoObj != "") {
			return true;
		} else {
			return false;
		}
	},
	// 获取用户信息
	getUserInfo: function() {
		var userInfoStr = localStorage.getItem('authInfo');
		if(userInfoStr && userInfoStr != "") {
			return JSON.parse(userInfoStr).authInfo;
		} else {
			return null;
		}
	},
	// 获取用户认证信息
	getUserAuthInfo: function() {
		var userAuthInfoStr = localStorage.getItem('authInfo');
		if(userAuthInfoStr && userAuthInfoStr != "") {
			return JSON.parse(userAuthInfoStr);
		} else {
			return null;
		}
	},
	// 校验身份证
	checkIdentityInfo: function(capth) {
		var pwdstr = capth;
		if(pwdstr == null || pwdstr == "") {
			return false;
		}
		var reg = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
		if(reg.test(capth)) {
			return true;
		} else {
			return false;
		}
	},
	// 校验邮箱
	checkMail: function(capth) {
		var pwdstr = capth;
		if(pwdstr == null || pwdstr == "") {
			return false;
		}
		var reg = new RegExp(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/);
		if(reg.test(capth)) {
			return true;
		} else {
			return false;
		}
	},
	// 校验qq
	checkQQ: function(capth) {
		var pwdstr = capth;
		if(pwdstr == null || pwdstr == "") {
			return false;
		}
		var reg = new RegExp(/[1-9][0-9]{4,}/);
		if(reg.test(capth)) {
			return true;
		} else {
			return false;
		}
	},
	// 校验开始日期和结束日期
	checkStartEndDate: function(startDate, endDate) {
		// 校验日期范围是否为空
		if(startDate == "" || endDate == "") {
			Toast({
				message: '请输入完整的日期范围',
				position: 'middle',
				duration: 2000
			});
			return false;
		}
		// 比较日期大小
		if(startDate > endDate) {
			Toast({
				message: '开始发货日期不能大于完成发货日期',
				position: 'middle',
				duration: 2000
			});
			return false;
		}
		// 跟当前日期比较
		var nowDate = moment().format("YYYY-MM-DD");
		if(startDate < nowDate || endDate < nowDate) {
			Toast({
				message: '开始发货日期和完成发货日期不能小于当天',
				position: 'middle',
				duration: 2000
			});
			return false;
		}
		return true;
	},
	test: function() {
		console.log("test");
	},
	// 会员认证
	MembershipAuth: function(routerthis) {
    var flag=false;
    var authInfoStr= localStorage.getItem("authInfo");
    if(authInfoStr&&authInfoStr!=""){
      var statusInfo=JSON.parse(authInfoStr);
      if(statusInfo.authInfo == '') {
        //没有进行认证
        routerthis.$router.push('/personal');
      } else if(statusInfo.authInfo.status == 2) {
        // this.authStatus = "实名认证未通过";
        //实名认证未通过
        routerthis.$router.push({ name: 'PersonalTel', params: {  authStatus: 2 }});

        // this.dataList[0].URL = {
        //   name: "PersonalTel",
        //   params: {
        //     authStatus: 2
        //   }
        // };
      } else if(statusInfo.authInfo.status == 1 && statusInfo.enterpriseInfo == '') {
        //第一步通过，第二步没有认证
        // this.authStatus = "认证未完成";
        //个人
        if(statusInfo.authInfo.type == 1) {
          routerthis.$router.push('/personalSecond');
          // this.dataList[0].URL = {
          //   name: "PersonalSecond",
          // }
        } else {
          routerthis.$router.push('/authEnterpriseSecond');

          // this.dataList[0].URL = {
          //   name: "AuthEnterpriseSecond",
          // }
        }
      } else if(statusInfo.authInfo.status == 1 && statusInfo.enterpriseInfo.status == 4) {

        //第一步通过，第二步认证未通过（）
        // this.notThroughInfo = statusInfo.enterpriseInfo.rejectNote;
        // this.authStatus = "认证未通过（" + statusInfo.enterpriseInfo.rejectNote + "）";
        //个人和企业
        if(statusInfo.authInfo.type == 1) {
          routerthis.$router.push({ name: 'PersonalSecond', params: {  enterpriseVerifyStatus: 4 }});

          // this.dataList[0].URL = {
          //   name: "PersonalSecond",
          //   params: {
          //     enterpriseVerifyStatus: 4
          //   }
          // }
        } else {
          routerthis.$router.push({ name: 'AuthEnterpriseSecond', params: {  enterpriseVerifyStatus: 4 }});
          // this.dataList[0].URL = {
          //   name: "AuthEnterpriseSecond",
          //   params: {
          //     enterpriseVerifyStatus: 4
          //   }
          // }
        }
      } else if(statusInfo.authInfo.status == 1 && statusInfo.enterpriseInfo.status == 1) {
        flag=true;
        // this.authStatus = "认证已通过";
        // this.dataList[0].URL = {
        //   name: "Certification",
        // };
        // //认证成功跳转申请贷款页
        // this.loansBtn = () => {
        //   this.$router.push('ApplyForLoan');
        // };
        // // 查看贷款详情
        // this.getLoanInfo();


      } else {
        //认证审核中
        routerthis.$router.push('/certification');
        // // this.authStatus = "认证审核中";
        // this.dataList[0].URL = {
        //   name: "Certification",
        // };
        // //没有进行认证点击申请
        // this.loansBtn = function() {
        //   Toast({
        //     message: '请先请耐心等待认证通过,方可申请贷款',
        //     position: 'middle',
        //     duration: 2000
        //   });
        // };
      }
    }
    return flag;
	},
	anXinQian:function(routerthis){
		var flag=false;
    	var authInfoStr= localStorage.getItem("authInfo");
    	if(authInfoStr&&authInfoStr!=""){
    		authInfoStr=JSON.parse(authInfoStr);
    		if(authInfoStr.axqStatus==0){
    			routerthis.$router.push('/AnXinImpower');
    		}else if(authInfoStr.axqStatus==1){
    			routerthis.$router.push('/signature');
    		}else if(authInfoStr.axqStatus==2){
    			flag=true;
    		}
    	}
    	return flag;
	}
	
	
	
	
};
