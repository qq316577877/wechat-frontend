<template>
	<div id="AnXinImpower">
		<div class="content">
			<div class="content_top">
				<h1>用户须知</h1>
				<p>1.在本平台签署电子合同需接受安心签服务并确认开通安心签账户;</p>
				<p>2.由于安心签为您开立安心签账户时需要确认您的身份，您点击下方<i class="mark-g">【开通安心签账户】</i>即视为您同意平台方将您的基础身份信息传输给安心签；</p>
				<p>3.请您知晓，开通安心签账户后，安心签将为您颁发数字证书，您的数字证书将托管在安心签云平台，并授权安心签在满足条件时签署。</p>
				<p>4.为保持电子合同的完整性，请您自行上传能够代表您身份的个人印章电子版。</p>
			</div>
			<div class="content_foot">
				<div class="foot-l">
					<input type="checkbox" v-model="readChecked" class="read_agreement" /><i class="read_font">阅读并同意</i>
				</div>
				<div class="foot-r">
					<a href="https://www.anxinsign.com/Web/duty/use_agreement.html">《安心签平台服务协议》《CFCF数字证书服务协议》</a>
					<a href="https://www.anxinsign.com/Web/duty/privacy_policy.html">《隐私声明》</a>
				</div>
			</div>
		</div>
		<div class="baseButton">
			<button type="button" class="greenBtn" @click="anXinImpower">开通安心签账户</button>
		</div>
	</div>
</template>

<script type="es6" src="./AnXinImpower.js"></script>

<style lang="scss" src="./AnXinImpower.scss"></style>