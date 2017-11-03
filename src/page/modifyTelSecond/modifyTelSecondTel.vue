<template >
  <div id="modifyTelPageTwoPage">
    <form class="modifyForm">
      <h5>新手机</h5>
      <input type="tel" v-model="newTel" maxlength=11 placeholder="请输入手机号" id="newTel">
      <input type="" maxlength=6 v-model="capth" id="capth" placeholder="请输入验证码"/>
      <button type=button id="btn-passage" @click="getCapth()">获取验证码</button>
    </form>
    <div class="baseButtonModify">
      <button type='button' class="greenBtnFull" id="sub" @click="sub()">确认</button>
    </div>
  </div>
</template>

<script type="es6" src="./modifyTelSecond.js"></script>
<style lang="scss" src="./modifyTelSecond.scss"></style>
