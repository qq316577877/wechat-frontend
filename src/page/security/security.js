/**
 * 账户安全
 * Created by yl on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";


export default {
  name: 'security',
  data() {
    return {
      dataList: [
        {name: "修改手机", URL:"modifytel" },
        {name: "修改密码", URL:"modifyPwd" },
        {name: "修改邮箱", URL:"modifyMail" },
        {name: "修改QQ", URL:"modifyQQ" },
      ],
    }
  },
  created:function () {
    this.init()
  },
  methods: {
      init:function () {
        httpRequest({
          url: "/wechat/user/info/get_user_information_ajax",
          success: (response) => {
              if(response.data.mail !=''){
                this.dataList[2].name='修改邮箱'
              }else{
                this.dataList[2].name='绑定邮箱'
              }

              if(response.data.qq !=''){
                this.dataList[3].name='修改QQ'
              }else{
                this.dataList[3].name='绑定QQ'
              }
          }, complete: () => {
            Indicator.close();
          }
        });
      }
  }
}
