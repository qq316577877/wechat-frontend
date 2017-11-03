<template >
  <div id="addressLink">
    <select id="ads_province" v-model='addressValue.provinceVal'  @change="provinceSelectVal">
      <option v-for="item in provinceList" v-bind:value="item.id" >{{item.name}}</option>
    </select>
    <select id="ads_city" v-model='addressValue.cityVal' @change="citySelectVal">
      <option v-for="item in cityInitList" v-bind:value="item.id" >{{item.name}}</option>
    </select>
    <select id="ads_erea" class="border_none" v-model='addressValue.ereaVal' @change="ereaSelectVal">
      <option v-for="item in areaInitList" v-bind:value="item.id" >{{item.name}}</option>
    </select>
    <!--<div>-->
    <!--<mt-picker :slots="addressSlots" value-key="name" @change="onValuesChange"></mt-picker>-->
    <!--</div>-->
  </div>
</template>

<script type="es6" src="./addressLink.js">
</script>
<style lang="scss" src="./addressLink.scss"></style>
