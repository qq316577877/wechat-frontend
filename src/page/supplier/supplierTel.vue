<template>
	<div id="supplierList">
		<ul id="supplierList_ul">
			<div class="data_null" v-show="show">
				<i class="iconfont icon-kong"></i>
				<p class="hint">当前没有您的数据!</p>
			</div>
			<li v-for="item in supplierList">
				<div class='supplierListInfo'>
					<h3>{{item.supplierName}}</h3>
					<div class="content">
						<p class="supplierFocus hid_two">联系人：<span>{{item.supplierContact}}</span></p>
						<p class="supplierFocus">电话：<span>{{item.cellPhone | showTel}}</span></p>
					</div>
					<p class="supplierAddress">{{item.address}}</p>
				</div>
				<div class='operate'>
					<router-link :to="{name:'AddSupplier',params:{id:item.id}}">
						<i id="editId" class='editId iconfont icon-wodetubiao-15'></i>
						<span class="ico_hint">编辑</span>
					</router-link>
					<div class="fr deleteBtn">
						<i id="deleteId" class='deleteId iconfont icon-wodetubiao-17' @click="deleteSupplier(item.id)"></i>
						<span class="ico_hint">删除</span>
					</div>
				</div>
			</li>
		</ul>
		<div class="baseButton">
			<button class="fullScreenBtn" type="button" @click="addSupplier()" id="createSupplyBtn"><i class="iconfont icon-jia1"></i>新增供应商</button>
		</div>
	</div>
</template>

<script type="es6" src="./supplier.js"></script>
<style lang="scss" src="./supplier.scss"></style>