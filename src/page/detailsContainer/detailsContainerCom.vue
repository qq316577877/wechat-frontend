<template>
	<div id="detailsContainer" class="detailsSubmit">
		<h5><i class="iconfont icon-wodetubiao-20" v-if="item.status==1"></i>{{item.statusDesc}}</h5>
		<form class="funcBaseFrom">
			<h3>收货地址</h3>
			<div class="formlinelabel">
				<label>收货人</label>
				<span class="formLineInfo">{{addressData.receiver}}</span>
			</div>
			<div class="formlinelabel">
				<label>电话</label>
				<span class="formLineInfo">{{addressData.cellPhone | showTel}}</span>
			</div>
			<div class="formlinelabel">
				<label>收货地址</label>
				<span class="formLineInfo">{{addressData.provinceName}}&nbsp;{{addressData.cityName}}&nbsp;{{addressData.address}}</span>
			</div>
			<div class="formlinelabel">
				<label>运输方式</label>
				<span class="formLineInfo">{{item.deliveryTypeDesc}}</span>
			</div>
		</form>

		<div class="excessive"></div>

		<div class="main">
			<h3>商品详情</h3>
			<div class="basic">
				<i class="stick"></i>
				<p class="flex_box top ml15">货柜批次号 <i>{{item.containerNo}}</i></p>
				<p class="flex_box foot ml15">订单号 <i>{{item.orderNo}}</i></p>
			</div>
			<div class="particular">
				<ul>
					<li v-for="data in containerGoodsList">
						<p class="flex_box top">{{data.varietyName}}<i>¥{{data.dealPrice| moneyFun}}</i></p>
						<p class="flex_box foot">{{data.commodityName}} <i>x{{data.commodityNum | numberFn}}</i></p>
					</li>
				</ul>
				<div class="total">
					<p class="flex_box top mt10">合计数量 (箱) <i>{{item.totalQuantity | numberFn}}</i></p>
					<p class="flex_box top mt10">合计金额 (元) <i>{{item.productAmount | moneyFun}}</i></p>
					<p class="flex_box top red mt10">贷款金额 (元) <i>{{item.loanAmount| moneyFun}}</i></p>
				</div>
			</div>
		</div>
		<div class="detailsContainer_foot">
			<button type="button" class="submit" @click="logistics" v-if="setContract">查看物流</button>
		</div>
	</div>
</template>

<script type="es6" src="./detailsContainer.js"></script>

<style lang="scss" src="./detailsContainer.scss"></style>