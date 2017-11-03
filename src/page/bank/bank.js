/**
 *
 * Created by qinmenghuan on 2017/7/22.
 */


import axios from 'axios'
import {Toast, Indicator,MessageBox} from 'mint-ui';
import httpRequest from "../../common/ajax.js";

export default {
  name: 'Bank',
  data() {
    return {
      showNoData:false,
      bankList: "",
    }
  },
  created: function () {
    this.getBankList()
  },
  methods: {
    addBank: function () {
      this.$router.push('addBank');
//        location.href="#/addBank"
    },
    getBankList: function () {
      Indicator.open();
      httpRequest({
        router:this,
        url:'/wechat/bank',
        success:(response)=> {
          if (response.code == 200) {
            this.bankList = response.data.bankCards;
            if(!response.data.bankCards){
              this.showNoData=true;
            }
          }
        },complete:()=> {
          Indicator.close();
        }
      })
    },
    editBank:function (id) {
      this.$router.push('addBank?id='+id);
    },
    deleteBank:function (id) {
      MessageBox.confirm('确定执行此操作?').then(action => {
        Indicator.open();

        httpRequest({
          url:"/wechat/bank/delete_user_bank_information_ajax",
          params:{
            id:id
          },
          success:(response)=>  {
            console.log(response);
            if (response.code == 200) {
              this.getBankList();
            }
          },complete:()=> {
            Indicator.close();
          }
        });
      });
    }
  },
  filters:{
    //格式化银行卡
    formatting:function (value) {
      return value.replace(/(\d{4})(?=\d)/g, "$1" + "  ")
    }
  }
}


