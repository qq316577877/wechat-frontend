/**
 * 地址三级联动
 * Created by qinmenghuan on 2017-08-25.
 */

import addressJSON from "../../common/address.js";
import {Picker} from 'mint-ui';

export default {
  name: 'addressLinkCom',
  props: {
    inputValue: String,
    getAddressValue:Function,
    addressObj:Object
  },
  components: {
    Picker
  },
  data() {
    return {
      provinceList:addressJSON,
      cityInitList:addressJSON[0].cities,
      areaInitList:addressJSON[0].cities[0].areas,
      addressValue:{
        provinceVal: addressJSON[0].id,
        cityVal: addressJSON[0].cities[0].id,
        ereaVal: addressJSON[0].cities[0].areas[0].id
      },
      addressSlots: [
        {
          flex: 1,
          values: addressJSON,
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: addressJSON[0].cities,
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: addressJSON[0].cities[0].areas,
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    }
  },
  watch:{
    addressObj:function () {
      console.log('-------',this.addressObj);
      this.initAddress();
    }
  },
  methods: {
    onValuesChange(picker, values) {
      console.log("values：",values);
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    provinceSelectVal:function (ele){
      // 循环判断省份
      for(var i=0;i<this.provinceList.length;i++){
        if(this.provinceList[i].id==ele.target.value){
          break;
        }
      }
      // 更新城市、区下拉框
      this.cityInitList=this.provinceList[i].cities;
      this.addressValue.cityVal=this.provinceList[i].cities[0].id;
      this.areaInitList=this.provinceList[i].cities[0].areas;
      this.addressValue.ereaVal=this.provinceList[i].cities[0].areas[0].id;
    },
    citySelectVal:function (ele) {
      // 循环判断城市
      for(var i=0;i<this.cityInitList.length;i++){
        if(this.cityInitList[i].id==ele.target.value){
          break;
        }
      }
      // 更新区
      this.areaInitList=this.cityInitList[i].areas;
      this.addressValue.ereaVal=this.cityInitList[i].areas[0].id;
    },
    ereaSelectVal:function () {
      // 更新数据到父组件
      this.getAddressValue(this.addressValue);
    },
    initAddress:function () {
      console.log("addressObj:",this.addressObj);
      //
      if(!this.addressObj.provinceVal||this.addressObj.provinceVal==""){
        return;
      }
      // 绑定省份
      this.addressValue.provinceVal=this.addressObj.provinceVal;

      // 循环判断省份  并绑定城市
      for(var i=0;i<this.provinceList.length;i++){
        if(this.provinceList[i].id==this.addressObj.provinceVal){
          break;
        }
      }
      this.cityInitList=this.provinceList[i].cities;
      this.addressValue.cityVal=this.addressObj.cityVal;

      // 循环判断区  并绑定区
      for(var j=0;j<this.cityInitList.length;j++){
        if(this.cityInitList[j].id==this.addressObj.cityVal){
          break;
        }
      }
      this.areaInitList=this.cityInitList[j].areas;
      this.addressValue.ereaVal=this.addressObj.ereaVal;
    }
  },
  created(){
    if(this.addressObj){
      this.initAddress();
    }

    // 更新数据到父组件
    if(this.getAddressValue){
      this.getAddressValue(this.addressValue);
    }
  }
}
