<template>
  <div class="container">

    <!--<h2>手写签名实现(canvasSignature.js)使用示例</h2>-->
    <!--<div class="paramItem">
      <strong>以下为手写签名区域</strong>
    </div>
    <canvas id="signName" width="700px" height="300">
      您的浏览器当前不支持canvas画布，请更换别的浏览器进行签名操作
    </canvas>
    <button id="clearCanvas">重写</button>
    <button id="createImage">生成图片</button>
    <br/>
    <div class="paramItem">
      <strong>生成图片如下：</strong>
    </div>
    <img id="newImage" src="" />
    <vue-core-image-upload
    :class="['btn', 'btn-primary']"
    :crop="false"
    @imageuploaded="imageuploaded"
    :max-file-size="5242880"
    url="http://192.168.2.51/file/upload_private_ajax">
    </vue-core-image-upload>-->
    
    <iframe src="src/lib/PDFJS/web/viewer.html" width="100%" height="800"></iframe>
    
    
    
    
  </div>
</template>

<style type="text/css">
	
</style>
<script type="es6" src="./signDemo.js"></script>

