<template>
	<div id="particularsLsit" v-model="particularsLsit">
		<div class="serviceList_top">
			<h3>借据信息</h3>
			<div class="content">
				<div class="top_content_left">
					<div>
						<p class="tit">{{particularsLsit.offerLoan | moneyFun}}</p>
						<p class="fonts">借据金额</p>
					</div>
				</div>

				<div class="top_content_right">
					<p class="fonts flex_box">年利率 <span class="fm">{{particularsLsit.performanceRate}}</span></p>
					<p class="fonts flex_box">当前利息<span class="interest fm">{{particularsLsit.repaymentInterest}}</span></p>
					<p class="fonts flex_box">起息日<span class="fm">{{particularsLsit.offerTime | filterTimeFun}}</span></p>
					<p class="fonts flex_box">到期日<span class="red fm">{{particularsLsit.expiresTime | filterTimeFun}}</span></p>
					<p class="fonts flex_box">借据状态<span class="fs">{{particularsLsit.statusDesc}}</span></p>
				</div>
			</div>
		</div>

		<div class="serviceList_mid" v-show="show">
			<h3>还款明细</h3>
			<div class="content">
				<div>
					<p class="tit">{{particularsLsit.offerLoan | moneyFun}}</p>
					<p class="fonts">本金</p>
				</div>

				<div class="top_content_right">
					<p class="fonts flex_box">止息日<span class="fm">{{particularsLsit.repaymentTime | filterTimeFun}}</span></p>
					<p class="fonts flex_box">利息<span class="fm">{{particularsLsit.repaymentInterest | moneyFun}}</span></p>
				</div>
			</div>

		</div>
		<div class="serviceList_foot">
			<h3>货柜信息</h3>
			<div class="containerStatus">
				<div class="flex_box time">
					<p class="fonts">发货时间 <span class="fm">{{particularsLsit.deliveryTime | filterTimeFun}}</span></p>
					<p class="fonts">预计到货时间 <span class="fm">{{particularsLsit.preReceiveTime | filterTimeFun}}</span> </p>
				</div>
				<div class="flex_box order">
					<p class="fonts  number flex_box">订单号<span class="fm">{{particularsLsit.orderNo}}</span></p>
					<p class="fonts">订单状态 <span class="fs ml16">{{particularsLsit.orderStatusDesc}}</span></p>
				</div>

				<div class="flex_box container">
					<div class="fonts number flex_box">货柜批次号<span class="fm">{{particularsLsit.containerNo}}</span></div>
					<div class="fonts">货柜状态<span class="fs ml16">{{particularsLsit.containerStatusDesc}}</span></div>
				</div>
			</div>

		</div>
	</div>
</template>

<script type="es6" src="./servicelistParticulars.js"></script>

<style lang="scss" src="./servicelistParticulars.scss"></style>