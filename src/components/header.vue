<template>
  <div id="myheader">
    <router-link to="/index" class="name">图书借还系统</router-link>
    <router-link to="/login" class="name">{{AUTH || "login"}}</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["AUTH"])
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/common';
#myheader
  position absolute
  top 0
  left 0
  width calc(100vw - 10%)
  height 60px
  display flex
  justify-content space-between
  align-items center
  padding 0 5%
  background-color mainColor
  > a
    color #fff
  .name
    font-size 18px
    letter-spacing .2em
</style>
