<template>
    <div class="banner_list">
        <ul>
            <li class="tabList" :class="{ 'cur':item.iscur}" v-for="(item ,index) in message" @click="sel_this_li(index)">
                  <i :class="item.fontClass"></i>
                  <span  class="textstyle">{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
import Helpers from "../../common/helpers.js";
  export default {
    name:'banner',
    props:{
      message:Array
    },
    data() {
		return {
			selected:2
		}
	},
    methods:{
      sel_this_li:function(index){
      	var UserInfo=Helpers.getUserInfo();
      	this.selected = index;
      	if(index==0){
      		if(Helpers.MembershipAuth(this)){
      			this.$router.push('/createOrder');
      		}else if(UserInfo.customerId==0){
      			Helpers.anXinQian(this);
      		}
      	}else if(index==1){
      		this.$router.push('/detailsList');
      	}else if(index==2){
      		this.$router.push('/mine');
      	}
      }
    }
  }
</script>

<!--<style lang="scss" scoped>-->
  <style lang="scss" >
    @import "../../scss/main.scss";
    .banner_list{
        background-color:#eee;
        position: fixed;
        bottom: 0px;
        width: 100%;
        border-top:1px solid #dfdfdf;
        @include distance-dpr(padding, 5px, y);
        ul{
        	display:flex;
            li{
            	flex:1;
                text-align:center;
                
                  	color:#999;
                    i{
                        @include font-dpr(40px);
                    }
                    span{
                        display: block;
                        @include font-dpr(20px);
                    }
                
            }
        }
    }

    .cur{
        i{
            color: $base-color!important;
        }
        span{
            color:$base-color;
        }
    }
</style>
