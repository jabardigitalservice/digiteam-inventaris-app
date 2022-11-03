import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";
import modals from "./modals";
import sweetalert from "./sweetalert";
import user from "./user";
import { postFile } from "@/api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters: {
    token(state) {
      return state.token;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    saveToken({ commit, dispatch }, { token }) {
      commit("SET_TOKEN", token);
      Cookies.set("token", token);
      dispatch("user/getProfile", { root: true });
    },
    clearToken({ commit }) {
      Cookies.remove("token");
      Vue.$keycloak.logout({
        redirectUri: import.meta.env.VITE_STAGING_URI_BACK,
      });
    },
  },
  modules: { modals, sweetalert, user },
});
