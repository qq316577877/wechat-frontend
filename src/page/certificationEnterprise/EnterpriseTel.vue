<template>
  <div id="enterpriseInfoList">
    <h3 id="header">会员认证</h3>
    <form action="">
      <label for="">
        <input type="text" id="name" placeholder="请输入企业名称">
      </label>
      <label for="">
        <input type="text" id="identity" placeholder="营业执照号或社会信用代码证号">
      </label>
      <div class="selectList">
        <!--<select id="country" name="country" aria-required="true" aria-invalid="true" class="error formError errorRight">-->
          <!--<option value="0">选择国家</option>-->
          <!--<option value="1" data-tel="086">中国</option>-->
          <!--<option value="2" data-tel="084">越南</option>-->
        <!--</select>-->
       <addressLinkCom :getAddressValue="getAddressValue"></addressLinkCom>
      </div>
      <label for="">
        <input type="text" id="address" placeholder="请输入详细地址">
      </label>
      <label for="">
        <input type="text" id="tel" placeholder="请输入联系电话">
      </label>
      <div class="uploader">
        <div class="input-l"> 证件影像：</div>
        <div class="uploader_img">
          <img src="../../assets/temp/uploader.png"/>
        </div>
      </div>
    </form>
    <button type="button" id="sub">提交认证</button>
  </div>
</template>

<script type="es6" src="./enterprise.js"></script>
<style lang="scss" src="./enterprise.scss"></style>
