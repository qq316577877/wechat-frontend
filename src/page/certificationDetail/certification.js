/**
 * 认证详情
 * Created by yl on 2017/9/5.
 */
import {MessageBox, Toast, Indicator} from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";
import constants from "../../common/constants.js";

export default {
  name: 'certification',
  data() {
    return {
      authInfo: {},
      enterpriseInfo: {},
      authInfoResults:'',
      identityFront:'',
      identityBack:'',
      enterpriseInfoResult:'',
      address:''
    }
  },
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      httpRequest({
        router: this,
        url: "/wechat/enterprise/auth/enterprise_auth_info_ajax",
        success: (response) => {
          this.authInfo = response.data.authInfo;
          this.enterpriseInfo = response.data.enterpriseInfo;
          if(this.authInfo.status==1){
            this.authInfoResults='认证通过'
          }
          this.address=response.data;
          this.identityFront=constants.baseUrl+this.enterpriseInfo.identityFront;
          this.identityBack=constants.baseUrl+this.enterpriseInfo.identityBack;
          if(this.enterpriseInfo.status==3){
            this.enterpriseInfoResult='认证审核中'
          }else if(this.enterpriseInfo.status==1){
            this.enterpriseInfoResult='认证通过'
          }
        }, complete: () => {
          Indicator.close();
        }
      });

    }
  }
}
