import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";
import modals from "./modals";
import sweetalert from "./sweetalert";
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
    },

    clearToken({ commit }) {
      Cookies.remove("token");
    },
  },
  modules: { modals, sweetalert },
});
