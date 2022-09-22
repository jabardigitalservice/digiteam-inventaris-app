import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import store from "./store";

import "./assets/tailwind.css";

import axios from "axios";
axios.defaults.baseURL = import.meta.env.VUE_APP_AXIOS_URL_PATH;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
