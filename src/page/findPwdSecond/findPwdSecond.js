/**
 * 忘记密码
 * 第二步
 * Created by yl on 2017/9/5.
 */
import {MessageBox, Toast, Indicator} from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";


export default {
  name: 'findPwdSecondTel',
  data() {
    return {
      pwd: '',
      aginPwd: ''
    }
  },
  methods: {
    submit: function () {
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
        url: "/wechat/password/reset_password_ajax",
        params: {
          password: this.pwd,
          certificate: this.$route.params.certificate
        },
        success: (response) => {
          if (response.data) {
            MessageBox.alert('密码重置成功!').then(action => {
              this.$router.push('/login')
            });
          }
        }, complete: () => {
          Indicator.close();
        }
      });

    },


  }
}
