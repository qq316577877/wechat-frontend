/**
 * Created by yl on 2017/9/1.
 */

import {Toast,Indicator,MessageBox } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";

var timer, num = 60;
export default {
  name: 'register',
  mounted:function(){
    var testnode= document.querySelector('#btn-passage');
   // document.querySelector('#btn-passage').innerHTML = "秒后重发";
    //console.log("id:",this.$route.params.id);
  },
  data() {
    return {
      logoUrl: require('../../assets/logo.png'),
      msgBtnDisabled:false,
      tel: '',
      capth: '',
      pwd: '',
      aginPwd: ''
    }
  },
  methods: {
    getCapth: function () {
      if (!Helpers.checkPhone(this.tel)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      httpRequest({
        router:this,
        url:'/wechat/check_mobile_sendsms_ajax',
        params:{
          mobile: this.tel,
          type: 1
        },
        success:(response)=> {
          if (response.code == 200) {
            if (timer) {
              clearInterval(timer); //一定清理
              num = 60
            }
            // 禁用发短信按钮
            this.msgBtnDisabled=true;

            document.querySelector('#btn-passage').disabled = true;//不要再禁用了
            document.querySelector('#btn-passage').style.color = '#ccc';
            timer = setInterval(function () {
              num--;
              document.querySelector('#btn-passage').innerHTML = (num + "秒后重发");
              if (num === 0) {
                clearInterval(timer); //一定清理
                document.querySelector('#btn-passage').innerHTML = ('获取验证码');
                document.querySelector('#btn-passage').disabled = false;//不要再禁用了
                num = 60;
                // document.querySelector('#btn-passage').style.background = '#00aa5c';
                document.querySelector('#btn-passage').style.color = '#00aa5c';
              }
            }, 1000);
          }
        },complete:()=> {
          Indicator.close();
        }
      })
    },
    register: function () {
      // 校验手机号
      if (!Helpers.checkPhone(this.tel)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });

        return;
      }
      ;

      //短信验证码
      if (!Helpers.checkCapth(this.capth)) {
        Toast({
          message: '请输入正确的验证码',
          position: 'middle',
          duration: 2000
        });

        return;
      }

      //验证密码
      if (!Helpers.checkPassword(this.pwd)) {
        Toast({
          message: '密码请输入6-20位字符，需包含大写字母、小写字母、数字、符号，至少两种',
          position: 'middle',
          duration: 2000
        });

        return;
      }

      //再次输入密码
      if (this.aginPwd != this.pwd) {
        Toast({
          message: '两次输入的密码不一致',
          position: 'middle',
          duration: 2000
        });

        return;
      }

      Indicator.open();

      httpRequest({
        router:this,
        url:'/wechat/register_account_ajax',
        params:{
          mobile: this.tel,
          mobileCaptcha: this.capth,
          password: this.pwd
        },
        success:(response)=> {
          if (response.code == 200) {
            if (timer) {
              clearInterval(timer)
            }
            MessageBox.alert('注册成功!').then(action => {
              this.$router.push('/login')
            });
          }
        },complete:()=> {
          Indicator.close();
        }
      })

    }
  }
}
