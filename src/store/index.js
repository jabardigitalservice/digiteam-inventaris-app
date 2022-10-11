import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters: {
    token: (state) => state.token,
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
  modules: {},
});
