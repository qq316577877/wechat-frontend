<template>
  <ul class="menu">
    <h3>账户设置</h3>
      <li>
        <router-link to="account">账户信息</router-link>
       <!-- <a href="#" v-on:click="greet($event)">账户信息</a>  -->
      </li>
      <li>
        <a href="#" v-on:click="testMethod($event)">会员认证</a>
      </li>
      <li>
        <router-link to="hello">会员等级</router-link>
      </li>
      <li>银行账号</li>
      <li>收获地址</li>
    <h3>订单中心</h3>
      <li>账户信息</li>
      <li>会员认证</li>
      <li>会员等级</li>
      <li>银行账号</li>
      <li>收获地址</li>
    <h3>资金服务</h3>
      <li>我的申请</li>
      <li>我的贷款</li>
    <h3>伙伴管理</h3>
      <li>供应商信息</li>
  </ul>
</template>

<script>
export default {
  name: 'menutem',
  props: {
    inputValue: String,
    testMethod:Function
  },
  methods:{
    greet:function(event){
      console.log("abc");
    }
  }
}
</script>

<style scoped>
  .menu{
    list-style:none;
    padding-left:25px;
  }
  .menu h3{
    font-size: 16px;
  }
  .menu li{
    margin-left:16px;
    font-size:14px;
    line-height:28px;
  }
    .menu li a{
      text-decoration: none;
      color:black;
    }
</style>
