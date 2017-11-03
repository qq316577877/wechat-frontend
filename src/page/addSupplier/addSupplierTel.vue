<template>
	<div id="addSupplierInfo">
		<!-- 新增地址 -->
		<div id="addSupplier_send_page">
			<form class="funcBaseFrom">
				<div class="formlinelabel">
					<label>供应商</label>
					<input id="asup_username" v-model="asup_username" maxlength="120" placeholder="请输入供应商名称" type="text" />
				</div>
				<div class="formlinelabel">
					<label>供应商联系人</label>
					<input id="asup_telname" v-model="asup_telname" maxlength="32" placeholder="供应商联系人" type="text" />
				</div>
				<div class="formlinelabel">
					<label>联系电话</label>
					<input id="asup_phone" v-model="asup_phone" class="rightControl" maxlength="11" placeholder="请输入11位电话号码" type="text" />
				</div>
				<div class="formlinelabel border_none">
					<label>邮政编码</label>
					<input id="asupPostalCode" v-model="asupPostalCode" class="horiControl" maxlength="6" placeholder="邮政编码" type="text" />
				</div>
				<addressLinkCom :addressObj="addressObj" :getAddressValue="getAddressValue"></addressLinkCom>

				<div class="formlinelabel border_none">
					<label>详细地址</label>
					<input v-model="asup_detail" placeholder="详细地址" maxlength="120" type="text" />
				</div>

				<!--<textarea class="horiControl" v-model="asup_detail" maxlength="50" id="asup_detail" rows="3" cols="50" placeholder="详细地址">-->
				<!--</textarea>-->
			</form>
			<div class="baseButton">
				<button type="button" class="fullScreenBtn" id="supplier_save" v-on:click="msgFunc()">保存</button>
			</div>
		</div>
	</div>
</template>

<script type="es6" src="./addSupplier.js"></script>

<style lang="scss" src="./addSupplier.scss"></style>