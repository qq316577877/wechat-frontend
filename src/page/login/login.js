/**
 * 登录
 * Created by qinmenghuan on 2017-08-25.
 */

import {Toast, Indicator} from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";

export default {
  name: 'LoginCom',
  props: {
    inputValue: String
  },
  data() {
    return {
      logoUrl: require('../../assets/logo.png'),
      phonenum: "",
      password: "",
//    openid:localStorage.getItem("openid")
      openid:"oApxr0p7TR7hKirMmAf3_8nq8y4o"
//    openid:"oApxr0ssosdNRA3xZbPDkMycqFqw"
    }
  },
  // 创建后
  created() {
    console.log("clear");
    // 清理缓存
//  localStorage.removeItem('userInfo');
  },
  methods: {
    // 登录
    login: function (event) {
      // 校验
      if (!Helpers.checkPhone(this.phonenum)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      // 校验密码
      if (!Helpers.checkPassword(this.password)) {
        Toast({
          message: '请输入正确有效的密码',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      Indicator.open();

      httpRequest({
        url:"/wechat/login_ajax",
        params:{
          mobile: this.phonenum,
          password: this.password,
          auto_login: 0,
          openid:this.openid
        },
        success:(response)=>  {
          if (response.data) {
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            // 跳转到首页
            this.$router.push('/mine');
            this.$route.meta.keepAlive=false;
          }
        },complete:()=> {
          Indicator.close();
        }
      });
    },
    // 注册
    register: function (event) {
      this.$router.push('register');
    }
  }
}
