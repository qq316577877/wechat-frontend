/**
 * 修改手机号
 * Created by yl on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";

var timer,num=60;
export default {
  name: 'modifyTelSecond',
  data() {
    return {
      newTel:'',
      capth:''
    }
  },

  methods: {

    getCapth:function () {
      // 校验手机号
      if (!Helpers.checkPhone(this.newTel)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      httpRequest({
        router:this,
        url:'/wechat/password/mobile_sendsms_ajax',
        params:{
          mobile: this.newTel,
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
        url: "/wechat/user/info/new_mobile_ajax",
        params: {
          captcha: this.capth,
          mobile:this.newTel,
          certificate:this.$route.params.certificate
        },
        success: (response) => {
          if(timer){
            clearInterval(timer);
            num=60
          }
          MessageBox.alert('手机修改成功!').then(action => {
            this.$router.push('/security')
          });
        }, complete: () => {
          Indicator.close();
        }
      });
    }
  }
}
