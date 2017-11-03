/**
 * 忘记密码
 * Created by yl on 2017/9/5.
 */
import {MessageBox, Toast, Indicator} from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";

var num = 60;
var timer;
export default {
  name: 'findPwdTel',
  data() {
    return {
      tel: '',
      capth: '',
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
        url: "/wechat/is_mobile_registered_ajax",
        params: {
          mobile: this.tel,
        },
        success: (response) => {
          if (response.code == 200) {
            this.sendMessage()
          }
        }, complete: () => {

        }
      });

    },
    sendMessage: function () {
      httpRequest({
        url: "/wechat/password/mobile_sendsms_ajax",
        params: {
          mobile: this.tel,
          type: 2
        },
        success: (response) => {
          if (response.code == 200) {
            document.querySelector('#btn-passage').disabled = true;
            timer = setInterval(function () {
              num--;
              document.querySelector('#btn-passage').innerHTML = (num + "秒后重发");
              document.querySelector('#btn-passage').style.color = '#ccc';
              if (num === 0) {
                clearInterval(timer); //一定清理
                document.querySelector('#btn-passage').innerHTML = ('获取验证码');
                document.querySelector('#btn-passage').disabled = false;//不要再禁用了
                num = 60;
                // document.querySelector('#btn-passage').style.background = '#00aa5c';
                // css('color', '#fff');
                document.querySelector('#btn-passage').style.color = '#00aa5c';
              }
            }, 1000);
          }
        }, complete: () => {
          Indicator.close();
        }
      });
    },
    submit: function () {
      if (!Helpers.checkPhone(this.tel)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      if (this.capth == '') {
        Toast({
          message: '请输入短信验证码',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      httpRequest({
        url: "/wechat/password/check_mobile_captcha_ajax",
        params: {
          mobile: this.tel,
          mobileCaptcha: this.capth
        },
        success: (response) => {
          if (response.code == 200) {
            if (timer) {
              clearInterval(timer);
              num = 60
            }
            this.$router.push({
              name: 'findPwdSecondTel',
              params: {
                certificate: response.data.certificate
              }
            });
          }
        }, complete: () => {

        }
      });

    }
  }
}
