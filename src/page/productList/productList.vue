<template>
  <div id="productList">
    <div class="createType">
      <div  v-for='(iteminfo,infoindex) in goodsProductInfos' v-bind:class="{ active: createOrderData.modeType==infoindex}" @click='changeOrderType(iteminfo,infoindex)'>{{iteminfo.name}}</div>
    </div>
    <ul class="product_ul">

      <li v-for='(item,index) in goodsProductList'>
        <div class="info_div">
          <h5>{{item.name}}</h5>
          <p class="price">报价(元/箱):<span >￥{{item.priceLow}}-{{item.priceHigh}}</span></p>
        </div>

        <div class="operate_div">
          <span @click='changeProductNumNum(index,1)'>+</span>
          <input name="runnername" @input="handlerInput(index,$event)" v-model="item.commodityNum" type="number" />
          <span @click='changeProductNumNum(index,-1)'>-</span>
        </div>
      </li>
    </ul>
    <div id="totalBuy">
      <i class="iconfont @include icon-wodetubiao-22"></i>
      <span class="totalprice">合计数量(箱)：<span class="greenPrice">{{totalProductObj.totalNum}}</span></span>
      <button @click='submitSelectProduct()'>选好了</button>
    </div>
  </div>
</template>

<script type="es6" src="./product.js"></script>
<style lang="scss" src="./product.scss"></style>



