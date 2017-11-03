<template>
	<div id="app">
		<!--<router-view v-wechat-title = "$route.meta.title"></router-view> -->
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive" v-wechat-title = "$route.meta.title"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive" v-wechat-title = "$route.meta.title"></router-view>
	</div>
</template>

<script type="es6">
	export default { name: 'weixin' }
</script>