<template >
  <div id="loginPage">
    <img :src="logoUrl"/>
    <form class="baseForm">
      <div class="formline">
        <i class="iconfont icon-wodetubiao-12"></i><input class="horiControl" type="tel" v-model="phonenum" placeholder="手机号"  />
      </div>
      <div class="formline">
        <i class="iconfont icon-wodetubiao-18 password"></i><input type="password" v-model="password" class="horiControl" placeholder="密码"/>
      </div>
    </form>
    <div class="baseButton">
      <button @click="login()" class="greenBtn" id="loginBtn">登&nbsp;录</button>
    </div>
    <div class="link">
      <router-link class="greenlink" :to="{ path: 'register' }">立即注册</router-link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<router-link class="graylink" :to="{ path: 'findPwd' }">忘记密码</router-link>
    </div>
  </div>
</template>

<script type="es6" src="./login.js"></script>

<style lang="scss" src="./login.scss"></style>
