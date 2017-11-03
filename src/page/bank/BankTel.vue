<template>
  <div class="bank_tem">
    <div class="data_null" v-show="showNoData">
      <i class="iconfont icon-kong"></i>
      <p class="hint">当前没有您的数据!</p>
    </div>
    <ul id="bank_list">
      <li v-for="item in bankList">
        <div class="bankInfo">
          <div class="bank_header">
            <div class="bankTypeName">{{item.bankTypeName}}</div>
            <div class="delete" @click="deleteBank(item.id)">
              <i class="iconfont icon-wodetubiao-17 deleteBank" ></i>
              <span>删除</span>
            </div>
          </div>

          <span class="bank_name">{{item.accountName}}</span>
          <p class="bank_number">
            {{item.bankCard | formatting}}
          </p>
        </div>
        <!--<div class="operation">-->
          <!--&lt;!&ndash;<i class="iconfont icon-xiugai editBank" @click="editBank(item.id)"></i>&ndash;&gt;-->
         <!---->
        <!--</div>-->
      </li>
    </ul>
    <!--<div class="baseButton">-->
      <!--<button @click="addAddress()" class="fullScreenBtn" id="createAdsBtn">新增收货地址</button>-->
    <!--</div>-->
    <div class="baseButton">
      <button type="button" class="fullScreenBtn" @click="addBank()" id="addBank"><i class="iconfont addBankIcon icon-CombinedShape"></i>新增银行卡</button>
    </div>
  </div>
</template>

<script type="es6" src="./bank.js"></script>
<style lang="scss" src="./bank.scss"></style>
