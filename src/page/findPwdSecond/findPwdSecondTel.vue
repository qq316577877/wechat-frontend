<template>
  <div id="findPwdTwoPage">
    <form class="modifyForm">
      <h5>找回密码</h5>
      <input v-model="pwd" class="horiControl" type="password" placeholder="请输入密码"/>
      <input type="password" class="horiControl" v-model="aginPwd" placeholder="请再次输入密码"/>
    </form>
    <div class="baseButtonModify">
      <button type="button"  class="greenBtnFull" @click="submit()">确认</button>
    </div>
  </div>
</template>

<script type="es6" src="./findPwdSecond.js"></script>
<style lang="scss" src="./findPwdSecond.scss"></style>
<!---->
