<template>
	<div class="signatureTel">
		<h3>以下为手写签名区域</h3>
  	<div class="canvasBox">
      <canvas id="signName" >
        您的浏览器当前不支持canvas画布，请更换别的浏览器进行签名操作
      </canvas>
  	</div>
	<canvas id="newImage" width="200px;" height="200px;"></canvas>
    <div class="uploadButonDiv baseButton">
      <button   @click="clearCanvas">重写</button>
      <button class="" @click="upImage">上传签名</button>
    </div>
	</div>
</template>

<script type="es6" src="./signature.js"></script>

<style lang="scss" src="./signature.scss"></style>
