<template>
  <div id="findPwdPage">

    <form class="modifyForm">
      <h5>找回密码</h5>
      <input v-model="tel" class="horiControl" type="text" maxlength="11" placeholder="请输入手机号"/>
      <input id="vapthVal" type="text" v-model="capth" maxlength="6" class="diferent_input" placeholder="请输入验证码"/>
      <button type="button" id="btn-passage" @click="getCapth()">获取验证码</button>
    </form>
    <div class="baseButtonModify">
      <button type='button' class="greenBtnFull" @click="submit()">下一步</button>
    </div>
  </div>
</template>

<script type="es6" src="./findPwd.js"></script>
<style lang="scss" src="./findPwd.scss"></style>
