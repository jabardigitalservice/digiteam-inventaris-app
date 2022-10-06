import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import store from "./store";

import "./assets/tailwind.css";

import http from "./plugins/axios.js";

import Swal from "./plugins/swal.js";

import keycloak from "./plugins/keycloak.js";

Vue.use(http);
Vue.use(Swal);
Vue.use(keycloak);

Vue.$keycloak.init({ checkLoginIframe: true }).then((auth) => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
