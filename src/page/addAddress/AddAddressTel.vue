<template>
  <div id="addAddress_page" class="basePage">
    <form class="funcBaseFrom">
      <div class="formlinelabel">
        <label >收件人姓名</label>
        <input name="runnername" v-model="ads_username"  type="text" maxlength="32" placeholder="请输入名字" />
      </div>
      <div class="formlinelabel">
        <label >电话</label>
        <input name="runnername" v-model="ads_phone" maxlength="11" type="text" placeholder="收件人手机号" />
      </div>
      <div class="formlinelabel">
        <label >邮政编码</label>
        <input name="runnername" v-model="adsPostalCode" type="text" maxlength="6" placeholder="请输入邮政编码" />
      </div>
      <addressLinkCom :addressObj="addressObj"   :getAddressValue="getAddressValue"></addressLinkCom>
      <div class="formlinelabel">
        <label >详细地址</label>
        <input name="runnername"  v-model="ads_detail" maxlength="120" type="text" placeholder="请填写详细地址" />
      </div>
      <div class="formlinelabel">
        <label>设置默认地址</label>
        <mt-switch v-model="defaultValue"></mt-switch>
      </div>
    </form>
    <div class="baseButton">
      <button  class="fullScreenBtn" v-on:click="msgFunc()" >保&nbsp;存</button>
    </div>
  </div>
</template>

<script type="es6" src="./addaddress.js"></script>

<style lang="scss" src="./addaddress.scss"></style>


