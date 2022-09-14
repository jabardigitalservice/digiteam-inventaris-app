import Vue from "vue";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import store from "./store";
// import "./assets/index.css";
import "./assets/tailwind.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
