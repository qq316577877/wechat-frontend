<template>
  <div id="app">
    <div class="header">
      <div class="main_width">
        <a href="/home">
          <div :style="backgroundDiv" class="homeicon"></div>
          返回首页
        </a>
        <ul>
          <li>秦梦欢</li>
          <li class="spacer"></li>
          <li>退出</li>
          <li class="spacer"></li>
          <li>我的订单</li>
          <li class="spacer"></li>
          <li>会员中心</li>
          <li class="spacer"></li>
          <li>常见问题</li>
        </ul>
      </div>
    </div>
    <div class="headerInfo">
      <div class="main_width">
        <a href="#" :style="headInfo"></a>
        <span class="contact">如有问题请-拨打：<span >400-826-5128</span></span>
      </div>
    </div>
    <hr/>
    <div class="main_width main_content">
      <div id="menu">
        <Menu></Menu>
      </div>
      <div id="module">
        <router-view></router-view>
      </div>
    </div>
    <div id="main_footer"></div>

  </div>
</template>

<script >

import Hello from './components/Hello';
import Menu from './components/menu/menu.js'

export default {
  name: 'app',
  components:{Hello},
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('./assets/header_sprite.png') + ')'
      },
      headInfo:{
        backgroundImage: 'url(' + require('./assets/logo_main.png') + ')'
      }
      /*img: require('../assets/header_sprite.png')*/
    }
  }
}
</script>

<style scoped>
div,ul,li,span{
  margin:0;
  font-weight: 100;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main_width{
  width:1200px;
  margin:0 auto;
  height: 100%;
}
#app .header{
  height:30px;
  background-color:#f2f2f2;
}

#app .homeicon{
  background: -2px -56px no-repeat;
  width: 21px;
  height: 20px;
  display:inline-block;
  position:relative;
  top:5px;
}
#app .header a{
  font-size: 12px;
  color: #666;
  line-height: 30px;
  text-decoration:none;
}
.header ul{
  list-style:none;
  display: inline-block;
  float: right;
}
.header ul li{
  float:left;
  padding: 0 8px;
  line-height: 30px;
  font-size: 12px;
      color: #666;
}
.header ul .spacer {
  width: 1px;
  height: 16px;
  background-color: #DDD;
  padding: 0;
  margin-top: 9px;
}
.headerInfo{
  height:80px;
  border-bottom:1px soild #ECECEC;
}
.headerInfo a{
  background-repeat:no-repeat;
  display: inline-block;
  width: 160px;
  height: 60px;
  background-size: 160px 60px;
  margin-top:10px
}
.headerInfo .contact{
  float:right;
  line-height:80px;
  font-size: 14px;
  color: #666666;
}
.headerInfo .contact span{
  color: #ff4848;
}

.main_content{
  min-height:200px;
  position: relative;
}

#menu{
  width:180px;
  border:1px solid #dddddd;
}

#module{
  position:absolute;
  left:200px;
  top:0;
  right:0;
}

</style>
