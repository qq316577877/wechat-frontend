<template >
  <div id="modifyPwdPage">
    <form class="modifyForm">
        <input v-model="oldPwd"  class="horiControl" type="password" placeholder="请输入旧密码"/>
        <input v-model="pwd"  class="horiControl" type="password" placeholder="请输入新密码"/>
        <input type="password" class="horiControl" v-model="aginPwd" placeholder="请再次输入新密码"/>
    </form>
    <div class="baseButtonModify">
      <button type="button" class="greenBtnFull" value="editShow"  @click="submit()">确认</button>
    </div>
  </div>
</template>

<script type="es6" src="./modifyPwd.js"></script>
<style lang="scss" src="./modifyPwd.scss"></style>
