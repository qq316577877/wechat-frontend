<template>
	<div class="userContent">
		<div class="userInfo" :style="backgroundUrl">
			<div class="userInfo_box">
				<img :src="userIconUrl" alt="" />
				<div class="userInfoDiv">
					<p id="userTel">{{userInfo.mobile}}</p>
					<div class="user_safety">
						<p>{{authStatus}} <span v-if="statusInfoNum==41" id="refuseInfo" @click="watchInfo()">查看理由</span></p>
						<p>
							<router-link class="securityLink" to="security">账户与安全<i class="iconfont icon-wodetubiao-14"></i></router-link>
						</p>
					</div>
				</div>
			</div>
			<div class="userloaddiv" v-if="showLoans">
				<div class="usedloan">
					<p class="usedAmount">{{loansData.balance | moneyFun}}</p>
					<p>可用贷款额度（元）</p>
					<button type="button" v-show="isShowApplyAmount" class="applylink" @click="shipUrl">获取额度</button>
					<!--<router-link v-show="isShowApplyAmount" class="applylink" :to="ship">获取额度</router-link>-->
				</div>
				<div class="myloan">
					<p class="userLoanAmount">{{loansData.creditLine | moneyFun}}</p>
					<p>我的贷款额度（元）</p>
					<a target="_bank" v-show="isShowSearchContract" class="applylink" :href="loansData.contractUrl">查看合同</a>
				</div>
			</div>
			<div class="userloaddiv baseButton" v-else="showLoans">
				<div class="needApplyLoan textAlginRight">
					<p class="noLoanheader">暂无额度申请</p>
					<p>有了额度就能随借随还</p>
				</div>
				<div class="needApplyLoan textAlginLeft">&nbsp;&nbsp;<button class="applyBtn yellowBtn" @click="loansBtn">{{loanText}}</button></div>
			</div>
		</div>
		<div class="loanLink baseButton" v-if="showLoans">
			<button class="greenBtn" @click="myLoanApply">我的申请 <i class="iconfont icon-wodetubiao-14"></i></button>&nbsp;&nbsp;&nbsp;
			<button class="myloanBtn yellowBtn" @click="myLoanAmount">我的贷款<i class="iconfont icon-wodetubiao-14"></i></button>
		</div>
		<div :class="item.classname" v-for="(item,index) in dataList">
			<div class="personalInfo">
				<i :class="item.fontClass"></i>
				<router-link :to="item.URL">{{item.name}}</router-link>
				<!--<i class="linkicon iconfont icon-iconfont552cc1babd9aa"></i>-->
				<i class="fr iconfont icon-wodetubiao-14"></i>
			</div>
		</div>
	</div>
</template>

<script type="es6" src="./mine.js"></script>
<style lang="scss" src="./mine.scss"></style>