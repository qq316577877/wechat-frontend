<template>
	<div class="signContract">
		<div class="content">
			<vueshowpdf @closepdf="closepdf" v-show="isshowpdf" :pdfurl="pdfurls" @pdferr="pdferr" :maxscale='4' :minscale='0.6' :scale='1.1'></vueshowpdf>
		</div>
		<div class="baseButton">
      <button @click="dakai">打开</button>
			<button type="button" class="sure greenBtn" @click="sure">确认签订电子合同</button>
		</div>
		<div class="mask" v-show="maskShow">
			<div class="mask_content">
				<h4 class="title">签订合同</h4>
				<form class="baseForm">
					<p class="userTel">{{tel}}</p>
					<div class="formline">
							<input id="vapthVal" v-model="captchaCode" maxlength="6" class="diferent_input" placeholder="请输入验证码" />
							<button type="button" id="btn-passage" @click="getCapth()">获取验证码</button>
					</div>
					<p class="notify">您正在对安心签发出签名请求，委托安心签调用数字证书签署借款合同，数字证书一经调用立即生效。</p>
					<div class="btn_box">
						<button type="button" class=" accredit" @click="accredit()">确认授权</button><br />
						<button type="button" class="close" @click="close()">取消</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script type="es6" src="./signContractCS.js"></script>

<style lang="scss" src="./signContractCS.scss"></style>
