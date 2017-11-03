<template>
	<div id="personalInfoList">
		<!--<h3 id="header">会员认证</h3>-->

		<form action="" class="funcBaseFrom">
			<label id="headerHeight">
        <div class="vipType active" id="Personal" @click='toPersonal()'>个人</div>
        <div class="vipType" id="Enterprise" @click="toEnterprise()">企业</div>
        <div class="clear"></div>
      </label>
			<div for="" class="formlinelabel">
				<label class="infoHead" id="userName">个人姓名</label>
				<input type="text" id="name" v-model="nameInfo" placeholder="请输入姓名">
			</div>
			<div for="" class="formlinelabel">
				<label class="infoHead">身份证号</label>
				<input type="text" id="identity" v-model="identityInfo" placeholder="请输入身份证号码">
			</div>
			<div for="" class="formlinelabel">
				<label class="infoHead">银行卡号</label>
				<input type="text" id="bankNum" v-model="bankNum" placeholder="请输入银行卡号">
			</div>
			<div for="" class="formlinelabel">
				<label class="infoHead">手机号</label>
				<input type="text" id="tel" v-model="tel" placeholder="银行预留手机号">
			</div>
			<div for="" class="formlinelabel">
				<label class="infoHead capthHeader">验证码</label>
				<div class="getCapth_box">
					<input type="text" id="capth" v-model="capth" placeholder="短信验证码" maxlength="6">
					<button type="button" id="getCapth" @click='getCapth()'>获取验证码</button>
				</div>
			</div>
			<!--<input type="file"/>-->
		</form>

		<!--<input type="button" value="下一步" id="sub"/>-->
		<div class="baseButton">
			<button type="button" @click='next()' class="fullScreenBtn" value="" id="sub">下一步</button>
		</div>

	</div>
</template>

<script type="es6" src="./personal.js"></script>
<style lang="scss" src="./personal.scss"></style>