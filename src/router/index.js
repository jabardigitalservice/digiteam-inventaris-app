import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage/Index.vue";
import NotFound from "../views/NotFound.vue";
import AddRequest from "../views/RequestPage/AddRequest.vue";
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
    {
      path: "/add-request",
      name: "add-request",
      component: AddRequest,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
