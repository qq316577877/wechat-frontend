<template>
	<div id="detailsIndent">
		<h3 class="title">{{detailsItem.statusDesc}}</h3>

		<!--container1-->
		<div class="container" v-if="statusShow">
			<div class="container_top">
				<p class="tit">资金服务</p>
				<div class="fund">
					<p class="loanLimit">本单可用贷款额度(元): <i> {{loanLimit| moneyFun}}</i></p>
					<p class="interest">利息按天计算,日利率低至0.0035%</p>
				</div>
				<div class="checkbox_box">
					<i class="iconfont needLoan" :class="needLoan==1?'icon-wodetubiao-19':'icon-wodetubiao-25'"></i><i class="checkbox_hint">本单使用资金服务</i>
				</div>
			</div>
			
			<div class="excessive"></div>

			<div class="container_mid">
				<p class="tit">意向发货期间</p>
				<div class="flex_box time_box">
					<time class="time mark-g">{{detailsItem.intentStartDate | filterTimeFun}}</time> 至
					<time class="time mark-g">{{detailsItem.intentEndDate | filterTimeFun}}</time>
				</div>
			</div>
			
			<div class="excessive"></div>

			<div class="container_bottom">
				<p class="tit">商品信息</p>

				<!--订单详情start-->
				<div class="Container_details" v-if="typeShow">
					<div class="flex_box Container_Status">
						<p>果品</p>
						<p>货柜数</p>
					</div>
					<div class="flex_box Container_Status">
						<p class="varietyName">{{detailsItem.varietyName}}</p>
  						<p class="containerNum">{{detailsItem.containerNum}}</p>
					</div>
					<div class="summation_box">
						<p class="summation">合计数量 : <i class="mark-g">{{detailsItem.containerNum}}柜</i></p>
					</div>
				</div>
				<!--订单详情end-->

				<!--货柜详情start-->
				<div class="line_item mb30" v-else="typeShow">
					<div class="commodity">
						<ul>
							<li class="commodity_grade_list" v-for="item in detailsItem.goodsInfoList">
								<p class="grade">{{item.commodityName}}</p>
								<p class="quantity">{{item.commodityNum | numberFn}} <i class="unit">箱</i></p>
							</li>
						</ul>
					</div>
					<div class="summation_box">
						<p class="summation">合计数量 (箱): <i class="mark-r">{{detailsItem.goodsNum | numberFn}}</i></p>
					</div>
				</div>
				<!--货柜详情end-->
			</div>

		</div>
		<!--container1-->
		
		<!--container2-->
		<div class="container container_two" v-else="statusShow">
			<div class="container_top">
				<p class="tit">资金服务</p>
				<div class="checkbox_box">
					<i class="iconfont needLoan" :class="needLoan==1?'icon-wodetubiao-19':'icon-wodetubiao-25'"></i><i class="checkbox_hint">本单使用资金服务</i>
				</div>
				<p class="mb30 flex_box">本单可用贷款金额(元)<i>{{loanLimit | moneyFun}}</i></p>
				<div class="flex_box mb50">
					<p>本单申请金额(元)</p>
					<p v-if="submittedSuccessfully"><input type="number" oninput="if(value.length>12)value=value.slice(0,12)" v-model="loanAmount " class="loanAmount" :disabled="disabled"/></p>
					<p v-else="submittedSuccessfully">{{loanAmount | moneyFun}}</p>
				</div>
			</div>
			
			<div class="excessive"></div>

			<div class="container_mid">
				<p class="tit">商品信息</p>

				<!--订单详情start-->
				<div class="Container_details">
					<div class="flex_box Container_Status">
						<p>果品</p>
						<p>货柜数</p>
					</div>
					<div class="flex_box Container_Status">
						<p class="varietyName">{{detailsItem.varietyName}}</p>
  						<p class="containerNum">{{detailsItem.containerNum}}</p>
					</div>
					<div class="summation_box">
						<p class="summation">合计数量 : <i class="mark-r">{{detailsItem.containerNum}}柜</i></p>
					</div>
				</div>
			</div>
			
			<div class="excessive"></div>

			<div class="container_bottom">
				<p class="tit">商品信息</p>

				<!--订单详情start-->
				<div class="Container_details" v-if="typeShow">
					<div class="flex_box Container_Status">
						<p>果品</p>
						<p>货柜数</p>
					</div>
					<div class="flex_box Container_Status">
						<p class="varietyName">{{detailsItem.varietyName}}</p>
  						<p class="containerNum">{{detailsItem.containerNum}}</p>
					</div>
					<div class="summation_box">
						<p class="summation">合计数量 : <i class="mark-g">{{detailsItem.containerNum}}柜</i></p>
					</div>
				</div>
				<!--订单详情end-->

				<!--货柜详情start-->
				<div class="line_item mb30" v-else="typeShow">
					<div class="commodity">
						<ul>
							<li class="commodity_grade_list" v-for="item in detailsItem.goodsInfoList">
								<p class="grade">{{item.commodityName}}</p>
								<p class="quantity">{{item.commodityNum | numberFn}} <i class="unit">箱</i></p>
							</li>
						</ul>
					</div>
					<div class="summation_box">
						<p class="summation">合计数量 (箱): <i class="mark-r">{{detailsItem.goodsNum | numberFn}}</i></p>
					</div>
				</div>
				<!--货柜详情end-->
			</div>
			<div class="read" v-if="submitShow">
				<input type="checkbox" v-model="readChecked" class="input_box" id="inputbox" readonly="" />
				<i class="read_hint">阅读并同意<button type="button" class="purchasing" @click="purchasingUrl">《境外采购服务合同》</button></i>
			</div>	
		</div>
		<!--container2-->
		
		<div class="detailsIndent_foot">
			<div v-if="submittedSuccessfully">
				<button type="button" class="cancel" @click="cancelFn">取消订单</button>
				<button type="button" class="submit" @click="submitFn" v-if="submitShow">提交订单</button>
			</div>
			<div v-else="submittedSuccessfully">
				<a target="_bank" class="applylink" :href="pactUrl">查看合同</a>
			</div>
		</div>
	</div>
</template>

<script type="es6" src="./detailsIndent.js"></script>

<style lang="scss" src="./detailsIndent.scss"></style>