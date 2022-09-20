import Vue from "vue";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import store from "./store";
// import "./assets/index.css";
import "./assets/tailwind.css";

console.log(import.meta.env.VITE_API_URL);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
