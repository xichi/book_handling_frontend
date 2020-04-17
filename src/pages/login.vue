<template>
  <div>
    <div v-if="AUTH">欢迎回来，{{AUTH}}</div>
    <div v-else>请登录</div>
    <input type="button" value="admin login" @click="adminLogin">
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ADMIN_SIGNIN } from "@/store";
import { adminLogin } from "@/api/index";
export default {
  data(){
    return{
      email:"root@bh.com",
      password:"root"
    }
  },
  computed: {
    ...mapState({
      AUTH: state => state.AUTH
    })
  },
  methods: {
    ...mapActions([ADMIN_SIGNIN]),
    async adminLogin(){
      const { data: loginData } = await adminLogin(this.email, this.password);
      if(loginData.bearToken){
        this.ADMIN_SIGNIN({token: loginData.bearToken, email: this.email});
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>