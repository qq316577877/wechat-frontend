<template>
    <div>
        <router-view v-on:changeActive="changeActiveTabBar"></router-view>
        <tabbar :message="dataList"></tabbar>
    </div>
</template>

<script type="es6">
    import tabbar from "@/components/tabbar/tabbar";

    export default {
        name: "innerPage",
        components: {tabbar},
        data(){
            return {
                dataList: [
                    {name: "下单",fontClass: "iconfont icon-wodetubiao-10",iscur:false},
                    {name: "查询",fontClass: "iconfont icon-wodetubiao-11",iscur:false},
                    {name: "我的",fontClass: "iconfont icon-wodetubiao-9",iscur:true}
                ],
            }
        },
        methods:{
            changeActiveTabBar:function(index){
            	//console.log(index);
            	for(var i=0;i<this.dataList.length;i++){
            		if(i==index){
                		this.dataList[i].iscur=true;
                	}else{
                		this.dataList[i].iscur=false;
                	}
            	};
            }
        },
        created(){
        	
        }
    }
</script>
