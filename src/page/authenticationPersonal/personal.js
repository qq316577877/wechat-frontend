/**
 * 会员认证
 * Created by yl on 2017/8/25.
 */
import {MessageBox, Toast, Indicator} from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";
import axios from 'axios';


var num = 60, timer;

export default {
  name: 'PersonalTel',
  props: {
    inputValue: String
  },
  data() {
    return {

      validateObj: {
        username: "",
        identitynum: "",
        bankNum: "",
        phoneNum: ""
      },
      imgUrl: require('../../assets/logo.png'),
      nameInfo: '',
      identityInfo: '',
      bankNum: '',
      tel: '',
      capth: '',
      type: ''
    }
  },
  created: function () {
    this.init()
  },
  methods: {
    init: function () {


      if (this.$route.params.authStatus == 2) {
        httpRequest({
          url: "/wechat/enterprise/auth/enterprise_auth_info_ajax",
          success: (response) => {
            if (response.code == 200) {
              var userInfo = response.data.authInfo;
              this.nameInfo = userInfo.username;
              this.identityInfo = userInfo.identity;
              this.bankNum = userInfo.bankCard;
              this.tel = userInfo.mobile;
              if(userInfo.type==1){
                document.querySelector('#Personal').className = 'vipType active';
                document.querySelector('#Enterprise').className = 'vipType';
                document.querySelector('#userName').innerHTML = '个人姓名：';
              }else{
                document.querySelector('#Personal').className = 'vipType';
                document.querySelector('#Enterprise').className = 'vipType active';
                document.querySelector('#userName').innerHTML = '法人姓名：';
              }
            }
          }, complete: () => {
            if(timer){
              clearInterval(timer); //一定清理
              document.querySelector('#getCapth').innerHTML = ('获取验证码');
              document.querySelector('#getCapth').disabled = false;//不要再禁用了
              num = 60;
              // document.querySelector('#getCapth').style.background = '#00aa5c';
              // css('color', '#fff');
              document.querySelector('#getCapth').style.color = '#00aa5c';
            }
          }
        });

      }
    },
    enterprise: function () {
      this.$router.push('enterprise');
    },
    toPersonal: function () {
      if (this.$route.params.authStatus != 2) {
        document.querySelector('#Personal').className = 'vipType active';
        document.querySelector('#Enterprise').className = 'vipType';
        document.querySelector('#userName').innerHTML = '个人姓名：';
      }
    },
    toEnterprise: function () {
      if (this.$route.params.authStatus != 2) {
        document.querySelector('#Personal').className = 'vipType';
        document.querySelector('#Enterprise').className = 'vipType active';
        document.querySelector('#userName').innerHTML = '法人姓名：';
      }
    },
    getCapth: function () {

      if (!Helpers.checkPhone(this.tel)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      httpRequest({
        url: "/wechat/captcha/send_sms_direct_ajax",
        params: {
          mobile: this.tel,
          type: 4
        },
        success: (response) => {
          if (response.code == 200) {
            document.querySelector('#getCapth').disabled = true;
            timer = setInterval(function () {
              num--;
              document.querySelector('#getCapth').innerHTML = (num + "秒后重发");
              document.querySelector('#getCapth').style.color = '#ddd'
              if (num === 0) {
                clearInterval(timer); //一定清理
                document.querySelector('#getCapth').innerHTML = ('获取验证码');
                document.querySelector('#getCapth').disabled = false;//不要再禁用了
                num = 60;
                // document.querySelector('#getCapth').style.background = '#00aa5c';
                // css('color', '#fff');
                document.querySelector('#getCapth').style.color = '#00aa5c';
              }
            }, 1000);
          }
        }, complete: () => {
          Indicator.close();
        }
      });
    },
    next: function () {
      if (this.nameInfo == '') {
        Toast({
          message: '请输入个人姓名',
          position: 'middle',
          duration: 2000
        });
        return
      }

      if (!Helpers.checkIdentityInfo(this.identityInfo)) {
        Toast({
          message: '请输入正确的身份证号码',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      if (!Helpers.checkBankCard(this.bankNum)) {
        Toast({
          message: '请输入正确的银行卡号',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      if (this.tel == '') {
        Toast({
          message: '请输入手机号',
          position: 'middle',
          duration: 2000
        });
        return
      }

      if (this.capth == '') {
        Toast({
          message: '请输入验证码',
          position: 'middle',
          duration: 2000
        });
        return
      }

      Indicator.open();

      if(document.querySelector('#Personal').classList.contains('active')){
        this.type=1
      }else{
        this.type=2
      }
      httpRequest({
        url: "/wechat/enterprise/auth/check_auth_first_ajax",
        params: {
          type:this.type,
          username: this.nameInfo,
          identity: this.identityInfo,
          bankCard: this.bankNum,
          mobile: this.tel,
          captcha: this.capth,
        },
        success: (response) => {
          if (response.code == 200) {
            if (timer) {
              clearInterval(timer);
              num = 60;
              document.querySelector('#getCapth').style.color = '#00aa5c';
              document.querySelector('#getCapth').innerHTML = ('获取验证码');
              document.querySelector('#getCapth').disabled = false;//不要再禁用了
            }
            this.searchAuthInfo();
            // if(this.type==1){
            //   this.$router.push({
            //     name: 'PersonalSecond',
            //     params: {
            //       identity: this.identityInfo,
            //       username: this.nameInfo
            //     }
            //   });
            // }else{
            //   this.$router.push('AuthEnterpriseSecond')
            // }
          }
        }, complete: () => {
          Indicator.close();
        }
      });
    },
    // 查询
    searchAuthInfo:function () {
      httpRequest({
        url: "/wechat/enterprise/auth/auth_status_ajax",
        success: (response) => {
          // 如果审批通过
          if(response.data.status==11){
            this.$router.push('mine');
          }else{
            if(this.type==1){
              this.$router.push({
                name: 'PersonalSecond',
                params: {
                  identity: this.identityInfo,
                  username: this.nameInfo
                }
              });
            }else{
              this.$router.push('AuthEnterpriseSecond')
            }
          }
        }, complete: () => {
          Indicator.close();
        }
      });
    }
  }
}

