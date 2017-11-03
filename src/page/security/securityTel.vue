<template >
  <div id="securityPage">
    <div class="listSel" v-for="(item,index) in dataList">
      <div class="personalInfo">
        <router-link :to="item.URL">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script type="es6" src="./security.js"></script>
<style lang="scss" src="./security.scss"></style>
