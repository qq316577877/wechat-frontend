<template>
	<div id="loanAplication">
		<div class="data_null" v-show="show">
			<i class="iconfont icon-kong"></i>
			<p class="hint">当前没有您的数据!</p>
		</div>
		<ul id="loanAplicationlst_ul">
			<li v-for="item in loanAplication">
				<div class="content-top clearfix">
					<div class="fl">
						<i class="sign"></i>
						<p class="top">货柜批次号</p><span class="ml22 containerNo">{{item.containerNo}}</span>
					</div>
					
					<time class="addTime fr">{{item.addTime | filterTimeFun2}}</time>
				</div>
				<div class="content-foot">
					<div class="content-foot-top">
						<div>
							<p class="fm">{{item.appliyLoan | moneyFun}}</p>
							<p class="fs mt5">申请金额</p>
						</div>
						<div>
							<p class="type_color" >{{item.containerStatusDesc}}</p>
							<p class="fs mt5">货柜状态</p>
						</div>
					</div>

					<div class="content-foot-mid">
						<div class="left">
							<p class="fm">{{item.confirmLoan | moneyFun}}</p>
							<p class="fs mt5">审核金额</p>
						</div>

						<div class="mid">
							<p class="fm">{{item.performanceRate}}</p>
							<p class="fs mt5">年利率</p>
							<p class="fm mt20">{{item.serviceFee | moneyFun}}</p>
							<p class="fs mt5">服务费</p>
						</div>

						<div class="right">
							<p class="type_color">{{item.statusDesc}}</p>
							<p class="fs mt5">贷款状态</p>
						</div>
					</div>
				</div>
			</li>

		</ul>

	</div>
</template>

<script type="es6" src="./loanAplication.js"></script>

<style lang="scss" src="./loanAplication.scss"></style>