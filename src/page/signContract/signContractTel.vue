<template>
	<div class="signContract">
		<div class="content">
      <!--<select v-model="src" style="width: 30em">-->
        <!--<option v-for="item in pdfList" :value="item" v-text="item"></option>-->
      <!--</select>-->
      <!--<input v-model.number="page"  type="number" style="width: 5em"> /{{numPages}}-->

      <!--<button @click="rotate += 90">&#x27F3;</button>-->
      <!--<button @click="rotate -= 90">&#x27F2;</button>-->
      <!--<button @click="$refs.pdf.print()">print</button>-->
      <!--<div style="width: 50%">-->
        <!--<div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>-->
      <pdf  ref="pdf" :src="contractUrl" :page="page" @password="password" @progress="loadedRatio = $event" @error="error" @numPages="numPages = $event"></pdf>
      <!--<pdf ref="myPdfComponent" :src="contractUrl"></pdf>-->
		</div>
    <div class="pagechange">
      {{page}}/{{numPages}}页&nbsp;&nbsp;
      <button type="button"   @click="changeBeforePage">上一页</button>&nbsp;&nbsp;<button type="button"  @click="changeAfterPage">下一页</button>
    </div>
		<div class="baseButton">
      <!--<div class="pageBtn">-->
        <!--<button type="button"   @click="changePage">上一页</button> <button type="button"  @click="changePage">下一页</button>-->
      <!--</div>-->
      <button type="button" class="contractUrl" @click="viewerContract">点击阅读网页版</button>
			<button type="button" class="sure greenBtn" @click="sureSigned">确认签订电子合同</button>
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

<script type="es6" src="./signContract.js"></script>

<style lang="scss" src="./signContract.scss"></style>
