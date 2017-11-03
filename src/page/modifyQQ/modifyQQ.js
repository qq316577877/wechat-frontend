/**
 * 修改qq
 * Created by yl on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";


export default {
  name: 'modifyQQ',
  data() {
    return {
      qq:'',
    }
  },
  methods: {
    submit:function () {
      if (!Helpers.checkQQ(this.qq)) {
        Toast({
          message: '请输入正确的QQ号码',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      httpRequest({
        url: "/wechat/user/info/modify_qq_ajax",
        params: {
          qq: this.qq,
        },
        success: (response) => {
          MessageBox.alert('修改成功!').then(action => {
            this.$router.push('/security')
          });
        }, complete: () => {
          Indicator.close();
        }
      });
    }
  }
}
