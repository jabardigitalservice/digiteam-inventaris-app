import Vue from "vue";
import Keycloak from "keycloak-js";

const options = {
  url: import.meta.env.VITE_STAGING_KEYCLOCK_URL,
  realm: import.meta.env.VITE_STAGING_KEYCLOCK_REALM,
  clientId: import.meta.env.VITE_STAGING_KEYCLOCK_CLIENT_ID,
};

const _keycloak = Keycloak(options);

const Plugin = {
  install(Vue) {
    Vue.$keycloak = _keycloak;
  },
};

Plugin.install = (Vue) => {
  Vue.$keycloak = _keycloak;
  Object.defineProperties(Vue.prototype, {
    $keycloak: {
      get() {
        return _keycloak;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
