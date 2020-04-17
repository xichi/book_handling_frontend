
import VueRouter from "vue-router"

const index = r => require.ensure([], () => r(require("@/pages/index.vue")), "index")
const login = r => require.ensure([], () => r(require("@/pages/login.vue")), "login")
const detail = r => require.ensure([], () => r(require("@/pages/detail.vue")), "detail")

var router = new VueRouter({
  routes: [
    { path: "", redirect: "/index" },
    { path: "/index", component: index },
    { path: "/login", component: login },
    { path: "/detail", component: detail },
  ]
})

export default router