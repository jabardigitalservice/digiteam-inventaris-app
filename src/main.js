import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import store from "./store";

import "./assets/tailwind.css";
import axios from "./plugins/axios";
Vue.use(axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
