import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export const ADMIN_SIGNIN = "ADMIN_SIGNIN";   //登录成功

const store = new Vuex.Store({
  strict: true,
  state: {
    AUTH: sessionStorage.getItem("AUTH") || "",
    TOKEN: sessionStorage.getItem("TOKEN") || "",
  },
  getters: {

  },
  mutations: {
    [ADMIN_SIGNIN](state, {token, email}) {
      console.log(email);
      sessionStorage.setItem("AUTH", email);
      sessionStorage.setItem("TOKEN", token);
      state.TOKEN = token;
      state.AUTH = email;
    }
  },
  actions: {
    [ADMIN_SIGNIN]({ commit }, token, email) {
      commit(ADMIN_SIGNIN, token, email)
    }
  }
})
export default store