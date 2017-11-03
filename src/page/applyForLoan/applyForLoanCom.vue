<template>
	<div class="applyForLoan">
		<form class="funcBaseFrom">
			<div class="form_top pl30">
				<div class="formlinelabel">
					<label>申请人</label>
					<p class="fr">{{userObj.username}}</p>
				</div>
				<div class="formlinelabel">
					<label>身份证号</label>
					<p class="fr">{{userObj.identity}}</p>
				</div>
				<div class="formlinelabel">
					<label>联系电话</label>
					<i class="fr">{{userObj.mobile}}</i>
				</div>
			</div>

			<div class="form_mid pl30">
				<div class="formlinelabel">
					<label>婚姻状况</label>
					<div class="fr">
						<input type="radio" v-model="maritalStatus" value="1" class="radio" @change="maritalTOrF()" /><i>未婚</i>
						<input type="radio" v-model="maritalStatus" value="2" class="radio" @change="maritalTOrF()"/><i>已婚</i>
						<input type="radio" v-model="maritalStatus" value="3" class="radio" @change="maritalTOrF()"/><i>离异</i>
					</div>
				</div>
				<div v-show="maritalShow">
					<div class="formlinelabel">
						<label>配偶姓名</label>
						<input name="runnername" v-model="partnerName" type="text" placeholder="请输入名称" />
					</div>
					<div class="formlinelabel">
						<label>配偶身份证号</label>
						<input name="runnername" v-model="partnerIdentity" type="text" placeholder="请输入身份证号" />
					</div>
				</div>

			</div>

			<div class="form_foot pl30">
				<div class="formlinelabel">
					<label>所在地区</label>
					<addressLinkCom :addressObj="addressObj" :getAddressValue="getAddressValue"></addressLinkCom>
				</div>
				<div class="formlinelabel">
					<label>详细地址</label>
					<input name="runnername" v-model="address" type="text" placeholder="请填写详细地址" />
				</div>
			</div>

		</form>
		<div class="read">
			<input type="checkbox" v-model="checked" class="input-box" />同意
			<router-link to="/personalCreditContract" class="fonts">九江银行查询人民银行征信记录授权协议</router-link>
		</div>
		<div class="baseButton">
			<button type="button" class="fullScreenBtn" @click="submitInfo()">提交申请</button>
		</div>

	</div>
</template>

<script type="es6" src="./applyForLoan.js"></script>

<style lang="scss" src="./applyForLoan.scss"></style>