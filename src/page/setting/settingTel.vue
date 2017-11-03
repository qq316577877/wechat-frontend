<template >
  <div id="settingPage">
    <div class="listSel" v-for="(item,index) in dataList">
      <div class="personalInfo">
        <router-link :to="item.URL" v-on="item.bind">{{item.name}}</router-link>
        <i class="iconfont iconSize icon-iconfont552cc1babd9aa">  </i>
      </div>
    </div>
    <div class="baseButton marginTop">
      <button class="greenBtn exit " @click="exit()">退出登录</button>
    </div>
  </div>
</template>

<script type="es6" src="./setting.js"></script>
<style lang="scss" src="./setting.scss"></style>
