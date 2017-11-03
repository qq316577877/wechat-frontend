/**
 * 下单
 * Created by qinmenghaun on 2017/8/23.
 */

import { Search, Indicator, Toast,MessageBox} from 'mint-ui';
import httpRequest from "../../common/ajax.js";
import constants from "../../common/constants.js";
import helpers from "../../common/helpers.js";
import ProductList from "../productList/productList";
var qs=require('qs');
import moment from "moment";

export default {
  name: 'CreateOrder',
  components: {Search,ProductList},
  data() {
    return {
      isSuccess:false,
      isProductOrder:true,
      isByContainer:true,
      orderBaseData:{
        "loanInfo":{
          "balance":0.00
        },
      },
      loanInfo:{
        "balance":0.00
      },
      loanInfoBtn:{
        isShow:false,
        toUrl:"ApplyForLoan"
      },
      // 果品类别
      goodsVarietiesData:[],
      // 通过类别查询到商品
      categoryGoods:[],
      // 通过商品的品种获取到所有商品
      goodsProductInfos:[],
      constants:constants,
      test: false,
      createOrderData:{
        modeType:1,
        needLoan:"0",
        intentStartDate:moment().format('YYYY-MM-DD'),
        intentEndDate:moment().format('YYYY-MM-DD'),
        varietyId:"1",
        goodsList:[],
        containerNum:0,
        goodsNum:0,
        channel:2
      },
      userMobile:"",
      availableShow:false,
      notAvailableShow:false
    }
  },
  // 页面初始化
  created() {
    this.init();
    this.$emit("changeActive", 0);
  },
  // 页面销毁前
  beforeDestroy(){
    localStorage.removeItem("totalProductObj");
  },
  methods: {
    // 初始化方法
    init:function () {
      Indicator.open();

      // 获取贷款信息
      this.getLoanInfo();

      // 查询商品的类别
      this.getVarieties();
		
      // 根据商品品种，获取所有产品
      this.getGoodsProducts();

      // 获取选择的商品
      var totalProductObjStr= localStorage.getItem("totalProductObj");
      if(totalProductObjStr&&totalProductObjStr!=""){
        var totalProductObj=JSON.parse(totalProductObjStr);
        this.categoryGoods=totalProductObj.selectProductList;
        this.createOrderData.goodsNum=totalProductObj.totalNum;
      }

      // 根据商品品种获取所有商品
      // this.getGoodsByCategory();
    },
    // 切换下单类型
    changeOrderType:function (type) {
      this.createOrderData.modeType=type;
    },
    // 货柜加减方法
    changeContainerNum:function (type) {
      if(this.createOrderData.containerNum==0&&type==-1){
        return;
      }
      this.createOrderData.containerNum=parseInt(this.createOrderData.containerNum) +parseInt(type);
    },
    // 商品数量加减
    changeProductNum:function (index,type) {
      var product=this.categoryGoods[index];
      if(product.commodityNum==0&&type==-1){
        return;
      }
      this.categoryGoods[index].commodityNum=parseInt(this.categoryGoods[index].commodityNum)+parseInt(type);
      this.countTotalGoodsNum();
    },
    // 统计商品数量
    countTotalGoodsNum:function () {
      var totalnum=0;
      for(let good of this.categoryGoods){
        totalnum+=good.commodityNum/1;
      }
      this.createOrderData.goodsNum=totalnum/1;
    },
    // 创建订单
    createOrder:function () {
      // 日期大小 ，不小于今天
      if(!helpers.checkStartEndDate(this.createOrderData.intentStartDate,this.createOrderData.intentEndDate)){
        return;
      }

      // 按柜下单 货柜数大于0
      if(this.createOrderData.modeType==1&&this.createOrderData.containerNum<=0){
        Toast({
          message: '请选择货柜数',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      // 按商品下单 校验箱数大于0
      if(this.createOrderData.modeType==2&&this.createOrderData.goodsNum<=0){
        Toast({
          message: '请添加商品',
          position: 'middle',
          duration: 2000
        });
        return;
      }

      // 如果商品下单
      if(this.createOrderData.modeType==2){
        this.createOrderData.goodsList=this.categoryGoods;
        for(let good of this.createOrderData.goodsList){
          good.commodityId=good.id;
        }
      }

      // 资金服务
      this.createOrderData.needLoan=this.createOrderData.needLoan=="1";

      Indicator.open();
      // 下订单接口
      httpRequest({
        url:"/neworder/center/submit",
        params:this.createOrderData,
        success:(response)=>  {
          var userInfo=helpers.getUserInfo();
          this.userMobile=userInfo.mobile;
          // console.log("userInfo",userInfo);
          var title="&nbsp;&nbsp;&nbsp;&nbsp;您提交的采购订单已转入人工审核，请您保持手机号为"+userInfo.mobile+"的手机畅通，我们的客服人员预计在30分钟内联系您确认订单信息。<br/>";
          title+="&nbsp;&nbsp;&nbsp;&nbsp;温馨提示：人工审核受理时间为工作日9：00—17：00，当天17:00之后提交的采购订单，将在第二个工作日10：00之前受理。若您的采购订单非常紧急，请直接致电0577-87050258。"
          // 下单成功  并且跳转到订单列表
          // MessageBox({
          //   title: '提交成功，等待审核',
          //   message: title,
          //   showCancelButton: false,
          //   confirmButtonClass:"orderConfirm"
          // }).then(action => {
          //   this.$router.push('detailsList');
          // });

          this.isSuccess=true;
        },complete:()=> {
          Indicator.close();
        }
      });
    },
    // 成功跳转
    successBtn:function () {
      this.$router.push('detailsList');
      this.$route.meta.keepAlive=false;
    },
    // 获取个人贷款信息
    getLoanInfo: function() {
      //判断是否申请贷款
      httpRequest({
        url: "/wechat/loan/auth/get_loan_user_credit_information_ajax",
        router: this,
        success: (response) => {
          console.log(response)
          // 如果有数据
          if(response.data.loanUserCreditInfo) {
            this.loanInfo = response.data.loanUserCreditInfo;
            // 银行已拒绝您的授信申请
            if(response.data.loanUserCreditInfo.status == 3) {
              this.loanInfoBtn.isShow=false;
              this.loanInfo.balance=0.00;
            }else if(response.data.loanUserCreditInfo.status == 5) {
              // 如果状态为5 ，提交了申请，但未签订借款合同
              this.loanInfo.balance = "0.00";
              this.loanInfoBtn.isShow=true;
              this.loanInfoBtn.toUrl = "signature";
              this.notAvailableShow=true;
              if(response.data.stepFlag == 2) {
                this.loanInfoBtn.toUrl = "signContract";
              }
            }
            // 申请贷款审核中
            else if(response.data.loanUserCreditInfo.status == 6) {
              this.loanInfo.balance = "0.00";
              this.loanInfoBtn.isShow=false;
              this.notAvailableShow=true;
            } // 申请贷款和签订借款合同都过了
            else if(response.data.loanUserCreditInfo.status == 1) {
              this.loanInfoBtn.isShow=false;
              this.availableShow=true;
            }
          };
          // 如果没有贷款相关数据
          if(!response.data) {
            this.loanInfo.balance=0.00;
            this.loanInfo.toUrl="ApplyForLoan";
          }
        },
        complete: () => {}
      });
    },
    // 查询商品的类别
    getVarieties:function () {
      // 获取订单基础信息
      httpRequest({
        url:"/wechat/neworder/wechat_find_goods_varieties_by_category",
        isNew:true,
        params: qs.stringify({
          categoryId: 1
        }),
        success:(response)=>  {
          this.goodsVarietiesData=response.data.goodsVarieties;
        },complete:()=> {
          Indicator.close();
        }
      });
    },
    // 根据商品品种获取所有商品
    // getGoodsByCategory:function () {
    //   // 获取订单基础信息
    //   httpRequest({
    //     url:"/wechat/neworder/wechat_find_goods_commodities_by_category",
    //     isNew:true,
    //     params: qs.stringify({
    //       categoryId: 1
    //     }),
    //     success:(response)=>  {
    //       var goodlist=response.data.goodsCommodityInfos;
    //       for(let goodItem of goodlist){
    //         goodItem.commodityNum=0;
    //       }
    //       this.categoryGoods=goodlist;
    //     },complete:()=> {
    //       Indicator.close();
    //     }
    //   });
    // },
    // 根据商品品种，获取所有产品
    getGoodsProducts:function () {
      // 获取订单基础信息
      httpRequest({
        url:"/wechat/neworder/wechat_find_goods_products_by_variety",
        isNew:true,
        params: qs.stringify({
          varietyId: 1
        }),
        success:(response)=>  {
          this.goodsProductInfos=response.data.goodsProductInfos;
        },complete:()=> {
          Indicator.close();
        }
      });
    },
    // 校验数量输入不能为负数
    numberInput:function () {
       var num= this.createOrderData.containerNum.toString().replace(/[^\d]/g,'');
      this.createOrderData.containerNum=num;
    },
    handlerInput($event,index) {
      // $event 相当于 v-model
      // 按柜
      if(this.createOrderData.modeType==1){
        var num= this.createOrderData.containerNum.toString().replace(/[^\d]/g,'');
        if(num!=""){
          this.createOrderData.containerNum= parseInt(num) ;
        }else{
          this.createOrderData.containerNum=0;
        }
      }else{
        var commodityNum = this.categoryGoods[index].commodityNum.toString().replace(/[^\d]/g,'');
        if(commodityNum!=""){
          this.categoryGoods[index].commodityNum= parseInt(commodityNum) ;
          // this.createOrderData.containerNum= parseInt(num) ;
        }else{
          this.categoryGoods[index].commodityNum= 0 ;
          // this.createOrderData.containerNum=0;
        }
        console.log("num123");

        this.countTotalGoodsNum();
      }


      // console.log($event);
      // console.log(index)
    },
    // 申请贷款
    applayLoan:function () {
        this.$router.push(this.loanInfoBtn.toUrl);
    },
    // 跳转到商品列表
    goToProduct:function () {
      this.isProductOrder=false;
    },
    // 选好商品列表
    selectedGoods:function () {
      this.isProductOrder=true;
      // 获取选择的商品
      var totalProductObjStr= localStorage.getItem("totalProductObj");
      if(totalProductObjStr&&totalProductObjStr!=""){
        var totalProductObj=JSON.parse(totalProductObjStr);
        this.categoryGoods=totalProductObj.selectProductList;
        this.createOrderData.goodsNum=totalProductObj.totalNum;
      }
    }
  }
}
