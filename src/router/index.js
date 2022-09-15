import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage/Index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
    },
  ],
});

export default router;
