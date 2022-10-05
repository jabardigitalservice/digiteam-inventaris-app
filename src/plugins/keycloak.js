import Keycloak from "keycloak-js";
import Vue from "vue";

const keycloak = Keycloak({
  url: import.meta.env.VITE_STAGING_KEYCLOCK_URL,
  realm: import.meta.env.VITE_STAGING_KEYCLOCK_REALM,
  clientId: import.meta.env.VITE_STAGING_KEYCLOCK_CLIENT_ID,
});

export default {
  install() {
    Vue.prototype.$keycloak = keycloak;
  },
};
