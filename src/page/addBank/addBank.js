/**
 * Created by yl on 2017/8/24.
 */
import {Toast, Indicator, MessageBox} from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import addressLinkCom from "@/components/addressLink/addressLinkCom";
import  Helpers from "../../common/helpers.js";


var valueCode;
export default {
  name: 'AddBank',
  components: {addressLinkCom},
  // template:'<addressLinkCom />',
  props: {
    inputValue: String
  },
  data() {
    return {
      bankList: '',
      AddressValue: '',
      accountName: '',
      AccountBranch: '',
      bankNumber: '',
      bankInfo:'1',
      editShow: true,
      addressObj: {
        cityVal:"",
        ereaVal:"",
        provinceVal:"",
      }
    }
  },
  created: function () {
    this.init();
  },
  methods: {
    init: function () {
//    //判断是否有id值，确定是新增还是修改
//    var id = window.location.href;
//    var idArray = id.split('=');
//    if (idArray.length == 2) {
//      // console.log(document.getElementById('sub').innerHTML);
//      httpRequest({
//        router: this,
//        url: '/wechat/bank',
//        success: (response) => {
//          if (response.code == 200) {
//            this.editShow = false;
//            this.bankList = response.data.bankList;
//            var bankListArray = response.data.bankCards;
//
//            for (var i = 0; i < bankListArray.length; i++) {
//              if (bankListArray[i].id == idArray[1]) {
//
//                this.bankInfo=bankListArray[i].bankTypeId;
//                this.accountName = bankListArray[i].accountName;
//                this.AccountBranch = bankListArray[i].bankName;
//                this.bankNumber = bankListArray[i].bankCard;
//                // 赋值
//                this.addressObj = Object.assign({}, this.addressObj, {
//                  provinceVal: bankListArray[i].provinceId,
//                  cityVal: bankListArray[i].cityId,
//                  ereaVal: bankListArray[i].districtId
//                });
//
//              }
//            }
//          }
//        }, complete: () => {
//          Indicator.close();
//        }
//      });
//
//    } else {
//      this.editShow = true;
        httpRequest({
          url: '/wechat/bank',
          success: (response) => {
            if (response.code == 200) {
              this.bankList = response.data.bankList;
            }
          }, complete: () => {
            Indicator.close();
          }
        });
//    }
    },
    getAddressValue: function (data) {
      this.AddressValue = data;
    },
    addBank: function () {

      console.log(this.AddressValue);

      if (this.accountName == '') {
        Toast({
          message: '请输入开户名称',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      if (this.AccountBranch == '') {
        Toast({
          message: '请输入开户支行名称',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      if (!Helpers.checkBankCard(this.bankNumber)) {
        Toast({
          message: '请输入正确的银行卡号',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      Indicator.open();

      //获取开户银行类型
      var select = document.getElementById('bankName');
      var selectedIndex = select.selectedIndex;
      var dataId = parseInt(select[selectedIndex].getAttribute('id'));


      //提交
//    var id = window.location.href;
//    var idArray = id.split('=');
//    if (idArray.length == 1) {
        httpRequest({
          url: "/wechat/bank/add_user_bank_information_ajax",
          params: {
            accountName: this.accountName,
            provinceId: this.AddressValue.provinceVal,
            cityId: this.AddressValue.cityVal,
            districtId: this.AddressValue.ereaVal,
            bankTypeId: dataId,
            bankName: this.AccountBranch,
            bankCard: this.bankNumber
          },
          success: (response) => {
            if (response.code == 200) {
              this.$router.push('bank');
            } else if (response.code == 405) {
              Toast({
                message: response.msg,
                position: 'middle',
                duration: 2000
              });
            }
          }, complete: () => {
            Indicator.close();
          }
        });
//    } else {
//      httpRequest({
//        url: "/wechat/bank/update_user_bank_information_ajax",
//        params: {
//          id:parseInt(idArray[1]),
//          accountName: this.accountName,
//          provinceId: this.AddressValue.provinceVal,
//          cityId: this.AddressValue.cityVal,
//          districtId: this.AddressValue.ereaVal,
//          bankTypeId: dataId,
//          bankName: this.AccountBranch,
//          bankCard: this.bankNumber
//        },
//        success: (response) => {
//          console.log(response);
//          if (response.code == 200) {
//            Toast({
//              message: '修改成功',
//              position: 'middle',
//              duration: 2000
//            });
//            this.$router.push('bank');
//          } else if (response.code == 405) {
//            Toast({
//              message: response.msg,
//              position: 'middle',
//              duration: 2000
//            });
//          }
//        }, complete: () => {
//          Indicator.close();
//        }
//      });
//
//    }

    }
  }

}
