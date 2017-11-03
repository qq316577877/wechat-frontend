<template>
  <div id="registerPage">
    <img :src="logoUrl"/>
    <form class="baseForm">
      <div class="formline">
        <i class="iconfont icon-wodetubiao-12"></i><input type="tel" v-model="tel" maxlength="11" placeholder="请输入手机号"/>
      </div>
      <div class="formline">
      	<div class="getCapth_box">
      		 <p><i class="iconfont icon-wodetubiao-16"></i><input id="vapthVal" v-model="capth" maxlength="6" class="diferent_input" placeholder="请输入验证码"/></p>
        <button type="button" id="btn-passage" @click="getCapth()">获取验证码</button>
      	</div>
      </div>
      <div class="formline">
        <i class="iconfont icon-wodetubiao-18"></i><input v-model="pwd" type="password" placeholder="请输入密码"/>
      </div>
      <div class="formline">
        <i class="iconfont icon-asmkticon0165"></i><input type="password" v-model="aginPwd" placeholder="请再次输入密码"/>
      </div>
    </form>
    <div class="baseButton">
      <button type="button" class="greenBtn" id="address_save1" @click="register()">注&nbsp;册</button>
    </div>
  </div>
</template>

<style lang="scss" src="./register.scss"></style>
<script type="es6" src="./register.js"></script>
