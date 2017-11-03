<template>
  <div id="addInfo">
    <form action="" class="funcBaseFrom">
      <div  class="formlinelabel">
        <label>开户名称</label>
        <input type="text" class="horiControl" v-model="accountName" id="accountName" placeholder="开户名称">
      </div>

      <!--开户银行所在地区-->
      <addressLinkCom :addressObj="addressObj"   :getAddressValue="getAddressValue"></addressLinkCom>

      <div class="formlinelabel">
        <label>开户银行</label>
        <select name=""  id="bankName"  v-model="bankInfo">
          <option :value="item.id" :id="item.id" v-for="item in bankList">{{item.name}}</option>
        </select>
      </div>

      <div class="formlinelabel">
        <label>开户支行</label>
        <input type="text" class="horiControl"   v-model="AccountBranch" placeholder="开户支行">
      </div>

      <div class="formlinelabel">
        <label>银行账号</label>
        <input type="text" class="horiControl"  v-model="bankNumber" placeholder="银行账号">
      </div>



    </form>
    <div class="baseButton">
      <button type="button" class="fullScreenBtn" value="editShow" v-if="editShow" @click="addBank()">添加银行账号</button>
      <button type="button" class="ordinary" value="editShow" v-else @click="addBank()">修改</button>
    </div>
  </div>
</template>

<script type="es6" src="./addBank.js"></script>
<style lang="scss" src="./addBank.scss"></style>
