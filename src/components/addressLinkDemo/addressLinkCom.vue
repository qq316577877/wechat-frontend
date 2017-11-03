<template >
  <div id="addressLink">
    <!--<select id="ads_province" v-model='addressValue.provinceVal'  @change="provinceSelectVal">-->
      <!--<option v-for="item in provinceList" v-bind:value="item.id" >{{item.name}}</option>-->
    <!--</select>-->
    <!--<select id="ads_city" v-model='addressValue.cityVal' @change="citySelectVal">-->
      <!--<option v-for="item in cityInitList" v-bind:value="item.id" >{{item.name}}</option>-->
    <!--</select>-->
    <!--<select id="ads_erea" v-model='addressValue.ereaVal' @change="ereaSelectVal">-->
      <!--<option v-for="item in areaInitList" v-bind:value="item.id" >{{item.name}}</option>-->
    <!--</select>-->
    <div class="formlinelabel">
      <label>收货地址</label>
      <input name="runnername" v-model="addressInputValue" readonly="readonly" type="text" placeholder="请选择" v-on:focus="onFocusFunc" v-on:blur="onBlurFunc"  />
    </div>
    <!--<input class="addressInput" type="text"/>-->
    <div class="addressPicker" v-show="isShowAddress">
      <mt-picker :slots="provinceSlots" value-key="name" @change="onProvinceChange"></mt-picker>
      <mt-picker :slots="citySlots" value-key="name" @change="onCityChange"></mt-picker>
      <mt-picker :slots="ereaSlots" value-key="name" @change="onEreaChange"></mt-picker>
    </div>
  </div>
</template>

<script type="es6" src="./addressLink.js">
</script>
<style lang="scss" src="./addressLink.scss"></style>
