/**
 * 修改手机号
 * Created by yl on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";

var timer,num=60;
export default {
  name: 'modifytel',
  data() {
    return {
      oldTel:'',
      capth:''
    }
  },
  created:function () {
    this.init()
  },
  methods: {
    init:function () {
      httpRequest({
        router:this,
        url:'/wechat/user/info/get_user_information_ajax',
        success:(response)=> {
          if (response.code == 200) {
              this.oldTel =response.data.mobile
          }
        },complete:()=> {
          Indicator.close();
        }
      })
    },
    getCapth:function () {

      httpRequest({
        router:this,
        url:'/wechat/password/mobile_sendsms_ajax',
        params:{
          mobile: this.oldTel,
          type: 3
        },
        success:(response)=> {
          if (response.code == 200) {
            if (timer) {
              clearInterval(timer); //一定清理
              num = 60
            }
            // 禁用发短信按钮

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
    sub:function () {
      if (this.capth=='') {
        Toast({
          message: '请输入短信验证码',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      Indicator.open();
      httpRequest({
        url: "/wechat/user/info/check_current_mobile_ajax",
        params: {
          captcha: this.capth,
        },
        success: (response) => {
          if(timer){
            clearInterval(timer);
            num=60
          }
          this.$router.push({
            name:'ModifyTelSecond',
            params:{
              certificate: response.data.certificate
            }
          });

        }, complete: () => {
          Indicator.close();
        }
      });
    }
  }
}
