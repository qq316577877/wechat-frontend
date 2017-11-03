/**
 * 收货地址列表
 * Created by yl on 2017/8/23.
 */

import {Toast, Indicator, MessageBox} from 'mint-ui';
import axios from 'axios';
import httpRequest from "../../common/ajax.js";

export default {
  name: 'AddressList',
  props: {
    inputValue: String
  },
  data() {
    return {
      showNoData:false,
      isAddressList: false,
      imgUrl: require('../../assets/logo.png'),
      addressList: ''
    }
  },
  methods: {
    init: function () {
      Indicator.open();
      httpRequest({
        router:this,
        url:'/wechat/delivery_address',
        success:(response)=> {
        	console.log(response);
          if(response.data.receiveAddress==null||response.data.receiveAddress.length==0){
            this.showNoData=true;
            this.addressList=''
          }else{
            this.showNoData=false;
            this.addressList = response.data.receiveAddress;
            // alert(JSON.stringify(response.data.receiveAddress))
          }
        },complete:()=> {
          Indicator.close();
        }
      })
    },
    msgFunc: function (event) {
      MessageBox('Notice', 'You clicked the button');
    },
    addAddress: function () {
      // this.$router.push('addaddress');
      this.$router.push({
        name:'AddAddress',
      });

    },
    deleteAddress: function (id) {
      MessageBox.confirm('确定执行此操作?').then(action => {
        Indicator.open();

        httpRequest({
          url:"/wechat/delivery_address/delete_user_receive_address_ajax",
          params:{
            id:id
          },
          success:(response)=>  {
            console.log(response);
            if (response.code == 200) {
              this.init();
            }
          },complete:()=> {
            Indicator.close();
          }
        });
      }, action => {
          // console.log("cancel1");
        })
        .then(function () {
          // console.log("cancel");
        });
    },

    //设置默认收货地址
    acquiescence:function (id) {

      Indicator.open();

      httpRequest({
        url:"/wechat/delivery_address/set_default_address_ajax",
        params:{
          id:id
        },
        success:(response)=>  {
          if (response.code == 200) {
            this.init();
          }
        },complete:()=> {
          Indicator.close();
        }
      });
    },

    editId:function (id) {
      this.$router.push({
        name:'AddAddress',
        params:{
          id:id
        }
      });
    }
  },
  created(){
    this.init();
  },
filters:{
  showTel:function (value) {
    return value.split('-')[1]
  }
}
}
