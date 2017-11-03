<template >
  <div id="logisticsInfo">
    <h5>{{TypeDesc}}</h5>
    <ul>
      <li class="line" :class="{'active':i==0}" v-for="(item,i) in logistics">
        <span ></span>
        <p>{{item.typeDesc}}</p>
        <p>{{item.addTimeStr}}</p>
      </li>
    </ul>
  </div>
</template>

<script type="es6" src="./logisticsInfo.js"></script>
<style lang="scss" src="./logisticsInfo.scss"></style>
