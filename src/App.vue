<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from "_c/header"
export default {
  name: 'app',
  components: {
    myHeader
  }
}
</script>

<style lang="stylus">
@import './assets/common';
#app
  margin-top 60px
</style>
