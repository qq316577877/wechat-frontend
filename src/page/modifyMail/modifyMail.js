/**
 * 修改邮箱
 * Created by yl on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";


export default {
  name: 'modifyMail',
  data() {
    return {
      mail:'',
    }
  },
  methods: {
    submit:function () {
      if (!Helpers.checkMail(this.mail)) {
        Toast({
          message: '请输入正确的邮箱地址',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      Indicator.open();
      httpRequest({
        url: "/wechat/user/info/binding_mail_ajax",
        params: {
          mail: this.mail,
        },
        success: (response) => {
          MessageBox.alert('邮箱修改成功!').then(action => {
            this.$router.push('/security')
          });
        }, complete: () => {
          Indicator.close();
        }
      });
    }
  }
}
