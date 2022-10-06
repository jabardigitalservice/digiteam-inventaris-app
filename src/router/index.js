import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage/Index.vue";
import NotFound from "../views/NotFound.vue";
import ListRequest from "../views/RequestPage/Index.vue";

import DashboardLayout from "../views/layout/DashboardLayout.vue";
import LoginLayout from "../views/layout/LoginLayout.vue";
import store from "../store/index.js";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: LoginLayout,
      redirect: "/",
      children: [
        {
          path: "/",
          name: "login",
          components: {
            default: LoginPage,
          },
          meta: {
            isAuthenticated: false,
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
          meta: {
            isAuthenticated: true,
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

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated) {
    if (!Vue.$keycloak.authenticated) {
      // Halaman dilindungi dan pengguna tidak diautentikasi. Paksa login
      Vue.$keycloak.login({
        redirectUri: import.meta.env.VITE_STAGING_KEYCLOCK_REDIRECT_URI,
      });
    } else {
      // Pengguna diautentikasi

      setInterval(() => {
        Vue.$keycloak
          .updateToken(5)
          .then((refreshed) => {
            if (refreshed) {
              console.log("Token refreshed " + refreshed);
              store.dispatch("saveToken", {
                token: Vue.$keycloak.token,
              });
            } else {
              //token not refreshed
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }, 6000);

      next();
      console.log("Authenticated");

      store.dispatch("saveToken", {
        token: Vue.$keycloak.token,
      });
    }
  } else {
    // Halaman ini tidak memerlukan otentikasi
    next();
  }
});

export default router;
