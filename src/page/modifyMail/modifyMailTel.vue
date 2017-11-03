<template >
  <div id="modifyMailPage">
    <form class="modifyForm">
      <h5>请输入邮箱</h5>
      <input type="email" v-model="mail" class="horiControl"   placeholder="请输入邮箱地址"/>
    </form>
    <div class="baseButtonModify">
      <button type=button  class="greenBtnFull" @click="submit()">确认</button>
    </div>
  </div>
</template>

<script type="es6" src="./modifyMail.js"></script>

<style lang="scss" src="./modifyMail.scss"></style>
