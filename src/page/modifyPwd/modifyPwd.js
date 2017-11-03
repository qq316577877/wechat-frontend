/**
 * 修改密码
 * Created by yl on 2017/9/5.
 */

import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";

export default {
  name: 'modifyPwd',
  data() {
    return {
      oldPwd:'',
      pwd:'',
      aginPwd:''
    }
  },
  methods: {
    submit:function () {
      //验证密码
      if (!Helpers.checkPassword(this.oldPwd)) {
        Toast({
          message: '请输入原密码',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      if (!Helpers.checkPassword(this.pwd)) {
        Toast({
          message: '密码请输入6-20位字符，需包含大写字母、小写字母、数字、符号，至少两种',
          position: 'middle',
          duration: 2000
        });
        return;
      }
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
        url: "/wechat/user/info/modify_pwd_ajax",
        params: {
          oldPassword: this.oldPwd,
          newPassword: this.pwd
        },
        success: (response) => {
          MessageBox.alert('密码修改成功!').then(action => {
            this.$router.push('/login')
          });
        }, complete: () => {
          Indicator.close();
        }
      });
    }
  }
}
