import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import router from "./router"
import store from "./store"
import { Table, TableColumn } from "element-ui";

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.use(Table);
Vue.use(TableColumn);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
