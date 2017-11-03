<template>
	<div id="certificationPage">
		<div class="authInfo box">
			<h6>实名认证</h6>
			<ul>
				<li>个人姓名<i>{{authInfo.username}}</i></li>
				<li>身份证号<i>{{authInfo.identity}}</i></li>
				<li>银行卡号<i>{{authInfo.bankCard}}</i></li>
				<li>手机号<i>{{authInfo.mobile}}</i></li>
				<p class="approve"><i class="iconfont icon-wodetubiao-16"></i>{{authInfoResults}} </p>
			</ul>
		</div>

		<div v-if="enterpriseInfo.type==1" class="enterpriseInfo box">
			<h6>会员认证</h6>
			<ul>
				<li>所在地区<i>{{address.provinceName}}&nbsp;{{address.cityName}}&nbsp;{{address.areaName}}</i></li>
				<li>详细地址<i>{{enterpriseInfo.address}}</i></li>
				<li>联系电话<i>{{enterpriseInfo.phoneNum}}</i></li>
			</ul>
			<div class="img">
				<p class="hint">证件影像</p>
				<div class="img_box">
					<img :src="identityFront" alt="">
					<img :src="identityBack" alt="">
				</div>
			</div>
			<p class="approve"><i class="iconfont icon-wodetubiao-16"></i>{{enterpriseInfoResult}}</p>
		</div>

		<div v-if="enterpriseInfo.type==2" class="enterpriseInfo box">
			<h6>会员认证</h6>
			<ul>
				<li>企业名称<i>{{enterpriseInfo.enterpriseName}}</i></li>
				<li>证照号<i>{{enterpriseInfo.credential}}</i></li>
				<li>联系电话<i>{{enterpriseInfo.phoneNum}}</i></li>
				<li>所在地区<i>{{address.provinceName}}&nbsp;{{address.cityName}}&nbsp;{{address.areaName}}</i></li>
				<li>详细地址<i>{{enterpriseInfo.address}}</i></li>
			</ul>
			<div class="img">
				<p class="hint">证件影像</p>
				<div class="img_box">
					<img :src="identityFront" alt="">
					<img :src="identityBack" alt="">
				</div>
			</div>
			<p class="approve"><i class="iconfont icon-wodetubiao-16"></i>{{enterpriseInfoResult}}</p>
		</div>

	</div>
</template>

<script type="es6" src="./certification.js"></script>
<style lang="scss" src="./certification.scss"></style>
