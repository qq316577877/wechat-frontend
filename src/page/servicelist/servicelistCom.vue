<template>
	<div id="serviceList">
		<div class="data_null" v-if="showNull">
			<i class="iconfont icon-kong"></i>
			<p class="hint">当前没有您的数据!</p>
		</div>

		<div class="loan-limit" v-if="showLoans">
			<span class="used">{{usedAmount | moneyFun}}</span>
			<p class="hint">我已用贷款额度(元)</p>
		</div>

		<!--v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"-->
		<ul id="serviceList_ul">
			<li v-for="item in serviceList">

				<div class="serviceList_top clearfix">
					<div class="fl">
						<i class="sign"></i><p class="top">货柜批次号</p><span class="ml22 containerNo">{{item.containerNo}}</span>
					</div>

					<router-link class="fr  particulars" :to="{name:'ServicelistParticulars',params:{id:item.id}}">详情<i class="icon-wodetubiao-14 foreword iconfont"></i></router-link>
				</div>

				<div class="serviceList_mid">
					<div class="mid_top box">
						<div class="fonts">
							<time class="tit">{{item.offerTime | filterTimeFun}}</time>
							<p class="fs">起息日</p>
						</div>

						<i class="wire"></i>

						<div class="fonts a">
							<p class="offerLoan">借据金额</p>
							<p class="offerLoan">{{item.offerLoan | moneyFun}}</p>
						</div>

						<i class="wire"></i>

						<div class="fonts">
							<time class="red fw400 tit">{{item.expiresTime | filterTimeFun}}</time>
							<p class="fs">到期日</p>
						</div>
					</div>
					<div class="mid_foot box">
						<div class="fonts">
							<p class="fw400 tit">{{item.performanceRate}}</p>
							<p class="fs">年利率</p>
						</div>

						<i class="vertical"></i>

						<div class="fonts">
							<p class="fw400 tit interest">{{item.repaymentInterest}}</p>
							<p class="fs">当期利息</p>
						</div>

						<i class="vertical"></i>

						<div class="fonts">
							<p class="fw400 tit">{{item.statusDesc}}</p>
							<p class="fs">借据状态</p>
						</div>
					</div>

				</div>
				<div class="serviceList_foot tit">
					<p><i class="icon iconfont icon-wodetubiao-6"></i>预计到货时间<time class="ml22">{{item.preReceiveTime | filterTimeFun}}</time></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="es6" src="./servicelist.js"></script>

<style lang="scss" src="./servicelist.scss"></style>
