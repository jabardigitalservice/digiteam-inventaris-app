import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage/Index.vue";
import NotFound from "../views/NotFound.vue";
import RequestPage from "../views/RequestPage/Index.vue";

Vue.use(VueRouter);

// function guardMyroute(to, from, next) {
//   var token = localStorage.token;
//   if (token == null || token == undefined || token == "") {
//     next("/");
//   } else {
//     next();
//   }
// }

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/request",
      name: "request",
      component: RequestPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
