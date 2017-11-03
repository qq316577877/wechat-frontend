<template>
	<div id="UploadTheSeal">
		<h3 id="header" style="margin-bottom: 50px">上传印章</h3>

		<form action="">
			<h2>
            	用户须知：
        </h2>
			<ul class="certificateMsg">
				<li>1、在本平台签署电子合同需接受安心签服务并确认开通安心签账户；</li>
				<li>2、由于安心签为您开立安心签账户时需要确认您的身份，您点击下方【开通安心签账户】即视为您同意平台方将您的基础身份信息传输给安心签；</li>
				<li>3、请您知晓，开通安心签账户后，安心签将为您颁发数字证书，您的数字证书将托管在安心签云平台，并授权安心签在满足条件时签署。</li>
				<li>4、为保持电子合同的完整性，请您自行上传能够代表您身份的个人印章电子版。</li>
			</ul>

			<label for="">
	        <div class="uploader">
	          <img :src="src"/>
	          <vue-core-image-upload
	            :class="['btn', 'btn-primary']"
	            :crop="false"
	            text=""
	            @imageuploaded="imageupload"
	            :max-file-size="5242880"
	            :url="uploadUrl">
	          </vue-core-image-upload>
	        </div>

	        <p class="hint">上传印章</p>
      	</label>
			<p class="hint"><span>温馨提示：</span>印章仅支持尺寸200*200以内、大小3MB以下，背景透明的png格式的图片</p>
			<div class="read">
				<input type="checkbox" v-model="checked" class="input-box" />阅读并接受
				<router-link :to="{name:'MineCom'}" class="fonts">《安心签平台服务协议》</router-link>
				<router-link :to="{name:'MineCom'}" class="fonts">、《CFCA数字证书服务协议》</router-link>
				<router-link :to="{name:'MineCom'}" class="fonts">、《隐私声明》</router-link>

			</div>
			<p class="red agreement">请先阅读并接受服务协议等</p>
		</form>
		<div class="baseButton">
			<button type="button" class="fixedBtn" @click="submitInfo()" id="addBank">提交印章</button>
		</div>

	</div>
</template>

<script type="es6" src="./UploadTheSeal.js"></script>

<style lang="scss" src="./UploadTheSeal.scss"></style>