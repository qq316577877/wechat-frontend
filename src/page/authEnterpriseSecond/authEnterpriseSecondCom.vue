<template>
  <div id="authEnterpriseSecond">
    <!--<h3 >企业认证</h3>-->
    <form action="" class="funcBaseFrom">
      <div for=""  class="formlinelabel">
        <label class="infoHead">企业名称</label>
        <input type="text" placeholder="请输入企业名称"  v-model="enterpriseObj.enterpriseName" class="formInput" >
      </div>
      <div for=""  class="formlinelabel">
        <label class="infoHead">证照号</label>
        <input type="text" maxlength="18" placeholder="请输入统一社会信用代码或注册号" v-model="enterpriseObj.credential" class="formInput" >
      </div>
      <div  class="formlinelabel" for="" >
        <label class="infoHead">联系电话</label>
        <input type="text" maxlength="11"  placeholder="请输入联系电话" v-model="enterpriseObj.phoneNum" class="formInput" >
      </div>
      <label class="flex_box">
        <span class="location">所在地区</span>
        <addressLinkCom :addressObj="addressObj" :getAddressValue="getAddressValue"></addressLinkCom>
      </label>
      <div  class="formlinelabel" for="" id="addressIn">
        <label class="infoHead address" >详细地址</label>
        <input placeholder="请输入详细地址" maxlength="120" class="formInput" type="text" name="" v-model="enterpriseObj.address" >

      </div>
      <label for="" id="upLabel">
        <span class="imgupload" id="upload">证件影像</span>
        <span id="uploadInfo">（上传图片大小不能超过1M）</span>
        <div class="uploader" id="uploaderFirst">
          <!--<i class="iconfont icon-xiangji uploaderIcon"></i>-->
          <img :src="imgSrcOne" alt=""  class="showImg">
          <p>身份证正面</p>
          <vue-core-image-upload
            :class="['btn', 'btn-primary']"
            :crop="false"
            text=""
            @imageuploaded="imageuploadedFace"
            :max-file-size="5242880"
            :url="imgUploadUrl">
          </vue-core-image-upload>

        </div>
        <div class="uploader">

          <!--<i class="iconfont icon-xiangji uploaderIcon"></i>-->
          <img :src="imgSrcTwo" alt=""  class="showImg">
          <p>身份证反面</p>
          <vue-core-image-upload
            :class="['btn', 'btn-primary']"
            :crop="false"
            text=""
            @imageuploaded="imageuploadedBack"
            :max-file-size="5242880"
            :url="imgUploadUrl">
          </vue-core-image-upload>
        </div>
      </label>
    </form>
    <div class="baseButton">
      <button type="button" class="greenBtn" v-on:click="submitInfo()">保存</button>
    </div>
  </div>
</template>

<script type="es6" src="./authEnterpriseSecond.js"></script>
<style lang="scss" src="./authEnterpriseSecond.scss"></style>
