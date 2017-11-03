<template>
	<div id="detailsList">
		<div class="createType">
			<button type="button" @click="typeIndent(0)" :class="{ 'active': 0 === selecteds }">订单</button>
			<button type="button" @click="typeContainer(1)" :class="{ 'active': 1 === selecteds }">货柜</button>
		</div>

		<div class="list_content">
			<!--订单列表-->
			<ul class="indent_list" v-if="showList">
				<div class="status_btn">
					<button type="button" v-for="(item,index) in btnType" class="status_btn_type" :class="{ 'active': index === selected }" @click="statusBtn(index,item.status)">{{item.statusDesc}}</button>
				</div>
				<div class="data_null" v-show="showNull">
					<i class="iconfont icon-kong"></i>
					<p class="hint">当前没有您的数据!</p>
				</div>
				<li v-for="item in indentList" @click="shipIndent(item.orderNo)">
					<div class="list_left">
						<p class="fontw mb20">{{item.orderNo}}</p>
						<p>{{item.varietyName}}</p>
					</div>
					<div class="list_mid">
						<p><i class="fontw">{{item | paymentMethod}}</i>{{item.modeTypeDesc}}</p>
					</div>
					<div class="list_right">
						<div>
							<time class="mb20">{{item.addTime | filterTimeFun2}}</time><br />
							<p class="statusDesc">{{item.statusDesc}}</p><i class="iconfont icon-wodetubiao-14 Jump_arrow"></i>
						</div>
					</div>
				</li>
			</ul>
			<!--货柜-->
			<ul class="container_list" v-else="showList">
				<div class="status_btn">
					<button type="button" v-for="(item,index) in btnType2" class="status_btn_type" :class="{ 'active': index === selected }" @click="statusBtn(index,item.status)">{{item.statusDesc}}</button>
				</div>
				<div class="data_null" v-show="showNull">
					<i class="iconfont icon-kong"></i>
					<p class="hint">当前没有您的数据!</p>
				</div>
				<li v-for="item in containerList" @click="shipContainer(item.id)">
					<div class="list_left">
						<p class="fontw mb20">{{item.containerNo}}</p>
						<p>{{item.containerName}}</p>
					</div>
					<div class="list_mid">
						<p><i class="fontw">{{item.productAmount | moneyFun}}</i>元</p>
					</div>
					<div class="list_right">
						<div>
							<time class="mb20">{{item.addTime | filterTimeFun2}}</time>
							<div>
								<p class="statusDesc">{{item.statusDesc}}</p><i class="iconfont icon-wodetubiao-14 Jump_arrow"></i>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="es6" src="./detailsList.js"></script>

<style lang="scss" src="./detailsList.scss"></style>