<template>
  <div id="addressList">
    <div class="data_null" v-show="showNoData">
      <i class="iconfont icon-kong"></i>
      <p class="hint">当前没有您的数据!</p>
    </div>
    <ul id="addressList_ul">
      <li v-for="item in addressList">
        <div class='addressInfo'>
          <h3><span class="fl">{{item.receiver}}</span> <span class="fr showTel">{{item.cellPhone | showTel}}</span></h3>
          <div class="clear"></div>
          <p>{{item.address}}</p>
        </div>
        <div class='operate'>
        	<p :class="{'selectedColor':item.selected==1}"><i class="iconfont ico":class="item.selected==1?'icon-wodetubiao-1':'icon-wodetubiao-3'" @click="acquiescence(item.id)"></i>默认地址</p>
        	
          <span class='operate_edit'>
            <div @click="editId(item.id)">
               <i class="iconfont iconSize icon-wodetubiao-15"></i><span class='editId'>编辑</span>
            </div>
             <div class="deleteClass" @click="deleteAddress(item.id)">
                  <i class="iconfont iconSize icon-wodetubiao-17"></i><span class='deleteId'>删除</span>
             </div>
             </span>
        </div>
      </li>
    </ul>
    <div class="baseButton">
      <button @click="addAddress()" class="fullScreenBtn" id="createAdsBtn"><i class="iconfont icon-jia1"></i>新增收货地址</button>
    </div>
  </div>
</template>

<script type="es6" src="./address.js"></script>
<style lang="scss" src="./address.scss"></style>



