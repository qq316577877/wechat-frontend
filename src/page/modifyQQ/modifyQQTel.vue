<template>
  <div id="modifyQQPage">
    <form class="modifyForm">
      <h5>请输入QQ</h5>
      <input type="" class="horiControl"  v-model="qq" placeholder="请输入QQ" maxlength="11"/>
    </form>
    <div class="baseButtonModify">
      <button type=button class="greenBtnFull" id="sub" @click="submit()">确认</button>
    </div>
  </div>
</template>

<script type="es6" src="./modifyQQ.js"></script>

<style lang="scss" src="./modifyQQ.scss"></style>
