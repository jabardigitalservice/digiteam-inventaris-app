import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import store from "./store";

import "./assets/tailwind.css";

import http from "./plugins/axios.js";

import Swal from "./plugins/swal.js";

Vue.use(http);
Vue.use(Swal);
new Vue({
  router,
  store,
  // Swal,
  render: (h) => h(App),
}).$mount("#app");
