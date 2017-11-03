<template>
	<div class="home">
		<div class="swipe">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="item in swiperSlides">
					<img class="swipe_img" :src="item.imgurl"/>
				</mt-swipe-item>
				
			</mt-swipe>
		</div>
		<ul class="product">
			<li v-for='(item,index) in productList'>
				<img :src="item.imgurl" />
				<div class="content">
					<h4>{{item.name}}</h4>
					<p>{{item.grade}}</p>
					<div class="clearfix">
						<p class="fl">报价:{{item.price}}</p>
						<p class="fr">
							<router-link class="a" :to="{name:'productDetail',params:{productId:item.productId}}">详情</router-link>
						</p>
					</div>

				</div>
			</li>
		</ul>
	</div>
</template>

<script type="es6" src="./home.js"></script>

<style lang="scss" src="./home.scss"></style>