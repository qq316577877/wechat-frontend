/**
 * 设置
 * Created by yl on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";


export default {
  name: 'setting',
  data() {
    return {
      dataList: [
        {name: "账户与安全", URL:"security" },
        {name: "关于我们", URL:"aboutUs" },
      ],
    }
  },
  methods: {
    exit:function () {
      MessageBox.confirm('是否确认退出?').then(action => {
        httpRequest({
          url: "/wechat/logout_ajax",
          success: (response) => {
            localStorage.removeItem('userInfo');
            localStorage.removeItem('openid');
            localStorage.removeItem('userInfo');
            location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5e2ee0ee4ccb5594&redirect_uri=http%3a%2f%2ffruit.natapp1.cc%2fweixin%2f%23%2faccredit&response_type=code&scope=snsapi_base&state=1#wechat_redirect";
            this.$route.meta.keepAlive=false;
          }, complete: () => {
            Indicator.close();
          }
        });
      });
    }
  }
}
