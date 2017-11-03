<template>
	<div class="orderSubmit">
		<div class="content">
			<div class="orderSubmit_header">
				<h3 class="title">您正在对安心签发出签名授权请求，委托安心签调用数字证书签署境外采购服务合同，且在本订单申请贷款放款之前委托安心签调用数字证书进行借款凭证签署，数字证书一经调用立即生效。若放款失败，则相应的借款凭证失效。</h3>
				<div class="container">
					<div class="accredit">

						<div class="formline">
							<i class="iconfont icon-wodetubiao-12"></i><i class="user">{{userTel}}</i>
						</div>
						<div class="formline">
							<div class="getCode_box">
								<p><i class="iconfont icon-wodetubiao-16"></i><input id="vapthVal" v-model="codeNum" maxlength="6" class="diferent_input" placeholder="请输入验证码" /></p>
								<button type="button" id="btn-passage" @click="getCode">获取验证码</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="orderSubmit_foot">
				<button type="button" class="cancel" @click="cancelFn">取&nbsp;&nbsp;&nbsp;消</button>
				<button type="button" class="submit" @click="submitAccredit">授&nbsp;&nbsp;&nbsp;权</button>
			</div>
		</div>
	</div>
</template>

<script type="es6" src="./orderSubmit.js"></script>

<style lang="scss" src="./orderSubmit.scss"></style>