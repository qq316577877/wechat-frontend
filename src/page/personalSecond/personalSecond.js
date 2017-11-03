/**
 * Created by yl on 2017/8/29.
 */

import VueCoreImageUpload  from 'vue-core-image-upload';
import addressLinkCom from "@/components/addressLink/addressLinkCom";
import  Helpers from "../../common/helpers.js";
import {MessageBox, Toast, Indicator} from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import constants from "../../common/constants.js";


export default {
  name: 'PersonalSecond',
  components: {addressLinkCom, VueCoreImageUpload},
  data() {
    return {
      AddressValue: '',
      addressObj: {
        cityVal: "",
        ereaVal: "",
        provinceVal: "",
      },
      imgsrFace: '',
      imgsrcBack: '',
      imgSrcOne: require('../../assets/uploaderBg.png'),
      imgSrcTwo: require('../../assets/uploaderBg.png'),
      address: '',
      tel: '',
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      imgFace: constants.imgUploadUrl,
      imgBack: constants.imgUploadUrl
    }
  },
  created() {

    this.init();
  },
  methods: {
    init: function () {
      // 认证未通过
      console.log(this.$route.params.enterpriseVerifyStatus);
      if (this.$route.params.enterpriseVerifyStatus == 4) {

        httpRequest({
          router: this,
          url: '/wechat/enterprise/auth/enterprise_auth_info_ajax',
          success: (response) => {
            if (response.code == 200) {
              var enterpriseInfo =response.data.enterpriseInfo;
              this.addressObj = Object.assign({}, this.addressObj, {
                provinceVal: enterpriseInfo.provinceId,
                cityVal: enterpriseInfo.cityId,
                ereaVal: enterpriseInfo.districtId
              });
              this.address=enterpriseInfo.address;
              this.tel=enterpriseInfo.phoneNum;
              // this.imgSrcOne=this.imgFace+enterpriseInfo.identityFront;
              // this.imgSrcTwo=this.imgFace+enterpriseInfo.identityBack;
              this.imgSrcOne=require('../../assets/uploaderBg.png');
              this.imgSrcTwo=require('../../assets/uploaderBg.png');
            }
          }, complete: () => {
            Indicator.close();
          }
        })
      }
      console.log(this.imgSrcOne);
    },
    getAddressValue: function (data) {
      this.AddressValue = data;
    },
    imageuploadedFace(res) {
      if (res.code == 200) {
        this.imgSrcOne = res.data.url;
        this.imgsrFace = res.data.path;
      }
    },
    imageuploadedBack(res) {
      if (res.code == 200) {
        this.imgSrcTwo = res.data.url;
        this.imgsrcBack = res.data.path;
      }
    },
    submitInfo: function () {
      if (!Helpers.checkPhone(this.tel)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      if (this.address == '') {
        Toast({
          message: '请输入详细地址',
          position: 'middle',
          duration: 2000
        });
        return
      }

      if (this.imgsrFace == '') {
        Toast({
          message: '请上传身份证正面',
          position: 'middle',
          duration: 2000
        });
        return
      }
      if (this.imgsrcBack == '') {
        Toast({
          message: '请上传身份证反面',
          position: 'middle',
          duration: 2000
        });
        return
      }
      Indicator.open();

      httpRequest({
        router: this,
        url: '/wechat/enterprise/auth/personal_auth_ajax',
        params: {
          name: this.$route.params.username,
          identity: this.$route.params.identity,
          countryId: 1,
          provinceId: this.AddressValue.provinceVal,
          cityId: this.AddressValue.cityVal,
          districtId: this.AddressValue.ereaVal,
          address: this.address,
          phoneNum: this.tel,
          identityFront: this.imgsrFace,
          identityBack: this.imgsrcBack,
        },
        success: (response) => {
          if (response.code == 200) {
            MessageBox.alert('提交成功!').then(action => {
              this.$router.push('/mine')
            });
          }
        }, complete: () => {
          Indicator.close();
        }
      })
    }
  }
}
