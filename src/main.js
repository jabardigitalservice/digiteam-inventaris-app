import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import store from "./store";

import "./assets/tailwind.css";

import http from "./plugins/axios.js";

Vue.use(http);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
