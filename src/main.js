import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import store from "./store";

import "./assets/tailwind.css";

import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
