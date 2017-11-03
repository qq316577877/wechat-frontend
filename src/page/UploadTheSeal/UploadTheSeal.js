/**
 * 上传印章
 * Created by zong on 2017/9/5.
 */

import VueCoreImageUpload  from 'vue-core-image-upload';
import addressLinkCom from "@/components/addressLink/addressLinkCom";
import Constants from "../../common/constants.js";
import {MessageBox, Toast, Indicator} from 'mint-ui';
import httpRequest from "../../common/ajax.js";


export default {
  name: 'UploadTheSeal',
  components: {addressLinkCom,VueCoreImageUpload},
  props: {
    inputValue: String
  },
  data() {
    return {
      src: require('../../assets/seal.png'),
      newSrc:"",
      uploadUrl:Constants.uploadUrl,
      checked:false
    }
  },
  created:function () {

  },
  methods:{
    imageupload(res) {
      if (res.code == 200) {
        this.src = res.data.url;
        this.newSrc=res.data.path;
      }
    },
    submitInfo:function () {
      	 if (this.newSrc == "") {
           Toast({
             message: '请上传印章',
             position: 'middle',
             duration: 2000
           });
           return
        };
      if(!this.checked){
      	Toast({
          message: '您不同意服务协议',
          position: 'middle',
          duration: 2000
        });
        return;
      };

      Indicator.open();

      httpRequest({
        router:this,
        url:'/wechat/loan/contract/account_open_ajax',
        params:{
          saelPath:this.newSrc
        },
        success:(response)=> {
        	
          if (response.code == 200) {
            MessageBox({
              title: '提示',
              message: '提交成功',
              showCancelButton: true
            });
          }
        },complete:()=> {
          Indicator.close();
        }
      })
    }
  }
}
