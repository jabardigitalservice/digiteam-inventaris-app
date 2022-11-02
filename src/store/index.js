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
    fileName: "",
  },
  getters: {
    token(state) {
      return state.token;
    },
    fileName(state) {
      return state.fileName;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_FILENAME(state, fileName) {
      state.fileName = fileName;
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
    async sendFile({ commit, dispatch }, file) {
      try {
        const response = await postFile("/files/upload", "POST", file);
        commit("SET_FILENAME", response.data.filename);
      } catch (error) {
        dispatch(
          "sweetalert/errorAlert",
          {
            title: "Server Error!",
            text: "Gagal upload file!",
          },
          { root: true }
        );
      }
    },
  },
  modules: { modals, sweetalert, user },
});
