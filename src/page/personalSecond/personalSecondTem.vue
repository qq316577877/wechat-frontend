<template>
  <div id="personalInfoListSecond">
    <!--<h3 id="header" style="margin-bottom: 50px">会员认证</h3>-->
    <form action="" class="funcBaseFrom">
      <div id="" class="formlinelabel">
        <label class="infoHead">联系电话</label>
        <input type="text" id="tel" v-model="tel" maxlength="11" placeholder="请输入11位手机号码">
      </div>
      <addressLinkCom :addressObj="addressObj" :getAddressValue="getAddressValue"></addressLinkCom>
      <!--<label for="">-->
        <!--<span class="infoHead">所在地区：</span>-->
        <!--<addressLinkCom :addressObj="addressObj" :getAddressValue="getAddressValue"></addressLinkCom>-->
      <!--</label>-->
      <div  class="formlinelabel">
        <label class="infoHead">详细地址</label>
        <input type=text placeholder="请输入详细地址" maxlength="120"  name="" v-model="address" >
      </div>

      <label id="upLabel">
        <span class="infoHead" id="upload" >证件影像：</span>
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
            :url=imgFace>
          </vue-core-image-upload>
        </div>
        <div class="uploader">
          <!--<i class="iconfont icon-xiangji uploaderIcon"></i>-->

          <img :src="imgSrcTwo" alt="" class="showImg">
          <p>身份证反面</p>
          <vue-core-image-upload
            :class="['btn', 'btn-primary']"
            :crop="false"
            text=""
            @imageuploaded="imageuploadedBack"
            :max-file-size="5242880"
            :url=imgBack>
          </vue-core-image-upload>

        </div>
      </label>
    </form>
    <div class="baseButton">
      <button type="button" @click="submitInfo()" class="greenBtn">保存</button>
    </div>

  </div>
</template>


<script type="es6" src="./personalSecond.js"></script>
<style lang="scss" src="./personalSecond.scss"></style>
