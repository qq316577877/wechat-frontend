/**
 * 企业认证第二步
 * Created by yl on 2017/8/29.
 */

import VueCoreImageUpload  from 'vue-core-image-upload';
import addressLinkCom from "@/components/addressLink/addressLinkCom";
import  Helpers from "../../common/helpers.js";
import { Toast, Indicator,MessageBox} from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import constants from "../../common/constants.js";

export default {
  name: 'AuthEnterpriseSecond',
  components: {addressLinkCom,VueCoreImageUpload},
  created:function () {
    //状态为4表示第二步认证未通过
    if(this.$route.params.enterpriseVerifyStatus==4){
      httpRequest({
        url: "/wechat/enterprise/auth/enterprise_auth_info_ajax",
        success: (response) => {
          if(response.code==200){
            var userInfo =response.data.enterpriseInfo;
            this.addressObj = Object.assign({}, this.addressObj, {
              provinceVal: userInfo.provinceId,
              cityVal: userInfo.cityId,
              ereaVal: userInfo.districtId
            });
            this.enterpriseObj.enterpriseName=userInfo.enterpriseName;
            this.enterpriseObj.credential=userInfo.credential;
            this.enterpriseObj.address=userInfo.address;
            this.enterpriseObj.phoneNum=userInfo.phoneNum;
            this.enterpriseObj.identityFront=userInfo.identityFront;
            this.enterpriseObj.identityBack=userInfo.identityBack
          }
        }, complete: () => {
        }
      });
    }
  },
  data() {
    return {
      enterpriseObj:{
        enterpriseName:"",
        credential:"",
        countryId:"",
        provinceId:"",
        cityId:"",
        districtId:"",
        address:"",
        phoneNum:"",
        identityFront:"",
        identityBack:""
      },
      imgUploadUrl:constants.imgUploadUrl,
      addressObj:{},
      imgsrFace:'',
      imgsrcBack:'',
      imgSrcOne:require('../../assets/uploaderBg.png'),
      imgSrcTwo:require('../../assets/uploaderBg.png'),
      address:'',
      tel:'',
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
    }
  },
  created: function () {
    this.init()
  },
  methods:{
    init:function () {
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
              this.enterpriseObj.address=enterpriseInfo.address;
              this.enterpriseObj.phoneNum=enterpriseInfo.phoneNum;
              this.enterpriseObj.enterpriseName=enterpriseInfo.enterpriseName;
              this.enterpriseObj.credential=enterpriseInfo.credential;
              this.enterpriseObj.imgSrcOne=this.imgFace+enterpriseInfo.identityFront;
              this.enterpriseObj.imgSrcTwo=this.imgFace+enterpriseInfo.identityBack;
            }
          }, complete: () => {
            Indicator.close();
          }
        })
      }
    },
    // 更新地址信息
    getAddressValue: function (data) {
      this.AddressValue = data;
      this.enterpriseObj.countryId=1;
      this.enterpriseObj.provinceId=data.provinceVal;
      this.enterpriseObj.cityId=data.cityVal;
      this.enterpriseObj.districtId=data.ereaVal;
    },
    // 上传身份证正面
    imageuploadedFace(res) {
      if (res.code == 200) {
        this.enterpriseObj.identityFront = res.data.path;
        this.imgSrcOne = res.data.url;
      }
    },
    // 上传身份证反面
    imageuploadedBack(res) {
      if (res.code == 200) {
        this.enterpriseObj.identityBack = res.data.path;
        this.imgSrcTwo = res.data.url;
      }
    },
    // 提交企业认证信息
    submitInfo:function () {
      // 校验企业名称
      if (this.enterpriseObj.enterpriseName == '') {
        Toast({
          message: '请输入企业名称',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      // 证照号
      if (this.enterpriseObj.credential == '') {
        Toast({
          message: '请输入证照号',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      // 联系电话
      if (!Helpers.checkPhone(this.enterpriseObj.phoneNum)) {
        Toast({
          message: '请输入联系电话',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      // 详细地址
      if (this.enterpriseObj.address == '') {
        Toast({
          message: '请输入详细地址',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      // 身份证正面
      if (this.enterpriseObj.identityFront == '') {
        Toast({
          message: '请上传身份证正面',
          position: 'middle',
          duration: 2000
        });
        return
      }

      // 身份证反面
      if (this.enterpriseObj.identityBack == '') {
        Toast({
          message: '请上传身份证反面',
          position: 'middle',
          duration: 2000
        });
        return
      }

      Indicator.open();
      // 提交企业认证信息
      httpRequest({
        // router:this,
        url:'/wechat/enterprise/auth/enterprise_auth_ajax',
        params:this.enterpriseObj,
        success:(response)=> {
          MessageBox.alert('提交成功!').then(action => {
            this.$router.push('/mine')
          });
        },complete:()=> {
          Indicator.close();
        }
      })
    }
  }
}
