<template >
  <div id="modifyTelPage">
    <form class="modifyForm">
      <h5>原手机：</h5>
      <input type="tel" disabled :value="oldTel">
      <input type="" maxlength=6  v-model="capth" id="capth" placeholder="请输入验证码"/>
      <button type="button" id="btn-passage" @click="getCapth()">获取验证码</button>
    </form>
    <div class="baseButtonModify">
      <button type="button" class="greenBtnFull" id="sub" @click="sub()">确认</button>
    </div>
  </div>
</template>

<script type="es6" src="./modifytel.js"></script>

<style lang="scss" src="./modifytel.scss"></style>
