/**
 * Created by yl on 2017/8/25.
 */

import {MessageBox,Switch, Toast, Indicator} from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";
import addressLinkCom from "@/components/addressLink/addressLinkCom";

export default {
  name: 'AddAddress',
  components: {addressLinkCom,Switch},
  props: {
    inputValue: String
  },
  data() {
    return {
      isAddressList: false,
      imgUrl: require('../../assets/logo.png'),
      ads_username: '',
      setDefault:'',
      ads_phone: '',
      adsPostalCode: '',
      ads_detail: '',
      AddressValue: '',
      addressObj: {
        cityVal: "",
        ereaVal: "",
        provinceVal: "",
      },
      defaultValue:true
    }
  },
  methods: {
    init: function () {
      //判断id是否存在，确定是新增还是修改
      var id = this.$route.params.id;
      console.log(id);
      if (id) {
        Indicator.open();
        httpRequest({
          url: "/wechat/delivery_address",
          router: this,
          params: {},
          success: (response) => {
            if (response.code == 200) {
              var addreddList = response.data.receiveAddress;
              console.log(addreddList);
              for (var i = 0; i < addreddList.length; i++) {
                if (addreddList[i].id == id) {
                  // 赋值
                  this.addressObj = Object.assign({}, this.addressObj, {
                    provinceVal: addreddList[i].provinceId,
                    cityVal: addreddList[i].cityId,
                    ereaVal: addreddList[i].districtId
                  });
                  addreddList[i].selected==1?this.setDefault=true:this.setDefault=false;
                  this.ads_username = addreddList[i].receiver;
                  this.ads_phone = addreddList[i].cellPhone.split('-')[1];
                  // this.ads_phone = addreddList[i].cellPhone;
                  this.adsPostalCode = addreddList[i].zipCode;
                  this.ads_detail = addreddList[i].address
                }
              }
            }
          }, complete: () => {
            Indicator.close();
          }
        });

      }
    },
    //保存
    msgFunc: function () {
      if (this.ads_username == '') {
        Toast({
          message: '收件人不能为空',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      if (!Helpers.checkPhone(this.ads_phone)) {
        Toast({
          message: '请输入正确的手机号',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      ;
      if (!Helpers.checkZcode(this.adsPostalCode)) {
        Toast({
          message: '请输入正确的邮政编码',
          position: 'middle',
          duration: 2000
        });
        return;
      }
      ;
      if (this.ads_detail == '') {
        Toast({
          message: '请输入详细的收货地址',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      //提交
      Indicator.open();

      var selected;
      selected=this.defaultValue?1:2;


      Indicator.open();
      //提交
      var id = this.$route.params.id;
      // var idArray = id.split('=');

      console.log(this.$route.params.id)

      if (id) {

        httpRequest({
          url:"/wechat/delivery_address/update_user_receive_address_ajax",
          params:{
            id:id,
            receiver:this.ads_username,
            countryId:1,
            provinceId:this.AddressValue.provinceVal,
            cityId:this.AddressValue.cityVal,
            districtId:this.AddressValue.ereaVal,
            address:this.ads_detail,
            zipCode:this.adsPostalCode,
            cellPhone:'086-'+this.ads_phone,
            selected:selected
          },
          success:(response)=>  {
            console.log(response);
            if (response.code == 200) {
              // this.init();
              this.$router.push('address');
            }
          },complete:()=> {
            Indicator.close();
          }
        });


      }else{
        httpRequest({
          url: "/wechat/delivery_address/add_user_receive_address_ajax",
          params: {
            receiver: this.ads_username,
            countryId: 1,
            provinceId: this.AddressValue.provinceVal,
            cityId: this.AddressValue.cityVal,
            districtId: this.AddressValue.ereaVal,
            address: this.ads_detail,
            zipCode: this.adsPostalCode,
            cellPhone: '086-'+ this.ads_phone,
            selected: selected
          },
          success: (response) => {
            if (response.code == 200) {
              // this.init();
              MessageBox.alert('添加成功').then(action => {
                this.$router.push('address');
              });

            }
          }, complete: () => {
            Indicator.close();
          }
        });
      }
    },
    getAddressValue: function (data) {
      this.AddressValue = data;
    },
  },
  created: function () {
    this.init()
  }
}
