import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage/Index.vue";
import NotFound from "../views/NotFound.vue";
import AddRequest from "../views/RequestPage/AddRequest.vue";
import ListRequest from "../views/RequestPage/Index.vue";

import DashboardLayout from "../views/layout/DashboardLayout.vue";
import LoginLayout from "../views/layout/LoginLayout.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: LoginLayout,
      redirect: "/login",
      children: [
        {
          path: "/login",
          name: "login",
          components: {
            default: LoginPage,
          },
        },
      ],
    },
    {
      path: "/request",
      name: "request",
      redirect: "/request/list",
      component: DashboardLayout,
      children: [
        {
          path: "list",
          name: "list-request",
          components: {
            default: ListRequest,
          },
        },
        {
          path: "add",
          name: "add-request",
          components: {
            default: AddRequest,
          },
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
