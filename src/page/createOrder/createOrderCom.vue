<template>
	<div>
		<div v-show="isProductOrder" id="createOrderPage">
			<div class="createType">
				<div v-bind:class="{ active: createOrderData.modeType==1}" @click='changeOrderType(1)'>按柜下单</div>
				<div v-bind:class="{ active: createOrderData.modeType==2}" @click='changeOrderType(2)'>按果品下单</div>
			</div>
			<form class="createOrderForm funcBaseFrom">
				<div class="selectLoan">
					<h5>资金服务</h5>
					<p class="usableAmount">可用贷款额度(元)<span>&nbsp;&nbsp;{{loanInfo.balance||"0.00"}}</span></p>
					<p class="interestRate">{{constants.commonData.interestMsg}}</p>
					<button v-show="loanInfoBtn.isShow" @click='applayLoan()'>去申请额度</button>
					<hr/>
					<div v-if="availableShow">
						<p class="isUsedFund">本单使用资金服务
							<span>
		            <label><input name="Fruit" type="radio" value="1" v-model='createOrderData.needLoan' />是</label>
		            <label><input name="Fruit" type="radio" value="0" v-model='createOrderData.needLoan' />否</label>
          		</span>
						</p>
					</div>
					<div v-if="notAvailableShow">
						<p class="announcement">申请额度以后可使用资金服务</p>
					</div>
				</div>
				<div class="sendProduct">
					<h5>意向发货时间段</h5>
					<div class="dateDuring">
						<input name="runnername" v-model="createOrderData.intentStartDate" type="date" />
						<span>至</span>
						<input name="runnername" v-model="createOrderData.intentEndDate" type="date" />
					</div>
				</div>
				<div v-show="createOrderData.modeType==1">
					<div class="sendProduct">
						<h5>货柜信息</h5>
						<div class="containerInfo">
							<div class="fruitType">
								<label>果品</label>
								<select v-model='createOrderData.varietyId'>
									<option v-for="item in goodsVarietiesData" :value='item.id'>
										{{item.name}}
									</option>
								</select>
							</div>
							<div class="containerNum">
								<label>货柜数</label>
								<div>
									<span @click='changeContainerNum(1)'>+</span>
									<!--v-on:change="numberInput"-->
									<input name="runnername" v-model="createOrderData.containerNum" @input="handlerInput($event,0)" type="number" />
									<span @click='changeContainerNum(-1)'>-</span>
								</div>
							</div>
						</div>
						<hr/>
						<div class="totalnum">
							<span class="totalprice">合计数量：
                <span class="greenprice"  v-show="createOrderData.modeType==1">{{createOrderData.containerNum}}柜</span>
							<span class="greenprice" v-show="createOrderData.modeType==2">{{createOrderData.goodsNum}}柜</span>
							</span>
						</div>
					</div>
				</div>

				<ul v-show="createOrderData.modeType==2" id="productContainerList">
					<div class="sendProduct productList">
						<h5>商品信息 </h5>
						<span class="addProduct" @click='goToProduct()'>+</span>
					</div>
					<div v-for="(item,index) in categoryGoods" class="formlinelabel containernumber">
						<label>{{item.name}}</label>
						<div>
							<span @click='changeProductNum(index,1)'>+</span>
							<input name="runnername" v-model="item.commodityNum" @input="handlerInput($event,index)" type="number" />
							<span @click='changeProductNum(index,-1)'>-</span>
						</div>
					</div>
					<div class="totalnum">
						<span class="totalprice">合计数量（箱）：
              <span class="redprice"  v-show="createOrderData.modeType==1">{{createOrderData.containerNum}}</span>
						<span class="redprice" v-show="createOrderData.modeType==2">{{createOrderData.goodsNum}}</span>
						</span>
					</div>
				</ul>
			</form>
			<div class="baseButton">
				<button id="submitBtn" @click="createOrder()" class="fullScreenBtn">提交</button>
			</div>
			<div class="mask" v-show="isSuccess">
				<div class="mask_content">
					<div class="successTitle">
						<i class="iconfont icon-wodetubiao-1"></i>
						<h4>提交成功，等待审核</h4>
					</div>
					<form class="baseForm">
						<p>您提交的采购订单已转入人工审核，请您保持手机号为{{userMobile}}的手机畅通，我们的客服人员预计在30分钟内联系您确认订单信息。</p>
						<hr/>
						<p>温馨提示：</p>
						<p>人工审核受理时间为工作日9：00—17：00，当天17:00之后提交的采购订单，将在第二个工作日10：00之前受理。若您的采购订单非常紧急，请直接致电0577-87050258。</p>
						<div class="baseButton">
							<button class="greenBtn" v-on:click="successBtn()">知道了</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<ProductList :selectedGoods="selectedGoods" v-show="!isProductOrder"></ProductList>
	</div>
</template>

<script type="es6" src="./createOrder.js"></script>
<style lang="scss" src="./createOrder.scss"></style>