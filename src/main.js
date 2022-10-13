import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Swal from "./plugins/swal.js";
import keycloak from "./plugins/keycloak.js";

Vue.use(Swal);
Vue.use(keycloak);

Vue.$keycloak.init({ checkLoginIframe: true }).then((auth) => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
