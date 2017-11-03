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
      isShowAddress:false,
      addressInputValue:"",
      provinceList:addressJSON,
      cityInitList:addressJSON[0].cities,
      areaInitList:addressJSON[0].cities[0].areas,
      addressValue:{
        provinceVal: addressJSON[0].id,
        cityVal: addressJSON[0].cities[0].id,
        ereaVal: addressJSON[0].cities[0].areas[0].id
      },
      addressSelectValue:[],
      provinceSlots: [
        {
          flex: 1,
          values: addressJSON,
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      citySlots: [
        {
          flex: 1,
          values: addressJSON[0].cities,
          className: 'slot1',
          textAlign: 'center'
        }
      ],
      ereaSlots: [
        {
          flex: 1,
          values: addressJSON[0].cities[0].areas,
          className: 'slot1',
          textAlign: 'center'
        }
      ],
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
    onFocusFunc:function () {
      this.isShowAddress=true;
    },
    onBlurFunc:function () {
      this.isShowAddress=false;
    },
    onProvinceChange(picker, values){
      var selectProvinceId;
      if(values[0]){
        selectProvinceId=values[0].id;
        // 循环判断省份
        for(var i=0;i<this.provinceList.length;i++){
          if(this.provinceList[i].id==selectProvinceId){
            break;
          }
        }
        // 更新城市下拉框
        this.citySlots[0].values=this.provinceList[i].cities;
        // 更新区下拉框
        this.ereaSlots[0].values=this.provinceList[i].cities[0].areas;
        // 保存下拉框的值
        this.addressValue.provinceVal=selectProvinceId;
        // 更新文本框
        this.addressInputValue=values[0].name+"-";
      }
    },
    onCityChange(picker, values){
      var selectCityId;
      if(values[0]){
        selectCityId=values[0].id;
        var citylist=this.citySlots[0].values;
        // 循环判断省份
        for(var i=0;i<citylist.length;i++){
          if(citylist[i].id==selectCityId){
            break;
          }
        }
        // 更新区下拉框
        this.ereaSlots[0].values=citylist[i].areas;
        // 保存下拉框的值
        this.addressValue.cityVal=selectCityId;
        // 更新文本框
        this.addressInputValue= this.addressInputValue.split("-")[0]+"-"+values[0].name+"-";
      }
    },
    onEreaChange(picker, values){
      if(values[0]){
        // 保存下拉框的值
        this.addressValue.ereaVal=values[0].id;
        // 更新数据到父组件
        this.getAddressValue(this.addressValue);
        // 更新文本框
        this.addressInputValue= this.addressInputValue.split("-")[0]+"-"+this.addressInputValue.split("-")[1]+"-"+values[0].name;
      }
    },
    onValuesChange(picker, values) {

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
