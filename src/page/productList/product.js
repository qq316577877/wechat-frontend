/**
 * 下单的商品列表
 * Created by qinmenghaun on 2017/8/23.
 */

import { Search, Indicator, MessageBox} from 'mint-ui';
import httpRequest from "../../common/ajax.js";
var qs=require('qs');

export default {
  name: 'ProductList',
  components: {Search},
  props: {
    selectedGoods:Function
  },
  data() {
    return {
      goodsProductInfos:[],
      goodsProductList:[],
      totalProductObj:{
        totalNum:0,
        selectProductList:[]
      },
      value:"",
      showNoData:false,
      isAddressList: false,
      addressList: '',
      createOrderData:{
        modeType:0
      }
    }
  },
  methods: {
    init: function () {
      this.getAllGoodsProducts();
    },
    // 根据商品品种，获取所有产品和商品
    getAllGoodsProducts:function () {
      // 获取订单基础信息
      httpRequest({
        url:"/wechat/neworder/wechat_find_goods_products_commodities_by_variety",
        isNew:true,
        params: qs.stringify({
          varietyId: 1
        }),
        success:(response)=>{
          var  goodsProductInfos = response.data.goodsProductInfos;
          console.log("goodsProductList:",goodsProductInfos);
          // 解析返回数据为json格式
          var infoList=[];
          for(var i=0;i<goodsProductInfos.length;i++){
            var list=[];
            var goodsCommodityInfos=goodsProductInfos[i].goodsCommodityInfos;
            for(var j=0;j<goodsCommodityInfos.length;j++){
              list[j]={
                name:goodsCommodityInfos[j].name,
                commodityNum:0,
                id:goodsCommodityInfos[j].id,
                priceHigh:goodsCommodityInfos[j].priceHigh,
                priceLow:goodsCommodityInfos[j].priceLow
              };
            }

            console.log("list:",list);

            infoList[i]={
              id:goodsProductInfos[i].id,
              name:goodsProductInfos[i].name,
              goodsCommodityInfos:list
            };
          }
          this.goodsProductInfos=infoList;
          this.goodsProductList=infoList[0].goodsCommodityInfos;


        },complete:()=> {
          Indicator.close();
        }
      });
    },
    // 切换下单类型
    changeOrderType:function (item,index) {
      this.createOrderData.modeType=index;
      this.goodsProductList = this.goodsProductInfos[index].goodsCommodityInfos;
    },
    // 选择产品数量
    changeProductNumNum:function (index,type) {
      var product=this.goodsProductList[index];
      if(product.commodityNum==0&&type==-1){
        return;
      }
      this.goodsProductList[index].commodityNum=parseInt(this.goodsProductList[index].commodityNum)+parseInt(type);
      this.totalProductObj.totalNum=parseInt(this.totalProductObj.totalNum)+parseInt(type);
    },
    // 事件
    handlerInput($event) {
      // 统计总数量
      var total=0;

      // 循环遍历
      for(var productObj of this.goodsProductInfos ){
        if(productObj.goodsCommodityInfos){
          for(var product of productObj.goodsCommodityInfos){
            if(product.commodityNum&&product.commodityNum!=""){
              total += parseInt(product.commodityNum);
            }
          }
        }
      }
      this.totalProductObj.totalNum =total;
    },
    // 选好所有产品
    submitSelectProduct:function () {
      var selectProductList=new Array();
      for(var productObj of this.goodsProductInfos ){
        if(productObj.goodsCommodityInfos){
          for(var product of productObj.goodsCommodityInfos){
            if(product.commodityNum&&product.commodityNum!=""&&product.commodityNum!=0){
              selectProductList.push(product);
            }
          }
        }
      }
      this.totalProductObj.selectProductList=selectProductList;
      localStorage.setItem("totalProductObj",JSON.stringify(this.totalProductObj));
      this.selectedGoods();
    }
  },
  created(){
    this.init();
  }
}
