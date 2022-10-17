import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";
import modals from "./modals";
import sweetalert from "./sweetalert";
import user from "./user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    status: Object.freeze({
      PENGAJUAN_MASUK: {
        value: 1,
        text: "Pengajuan Masuk",
      },
      PENGAJUAN_DITOLAK: {
        value: 2,
        text: "Pengajuan Ditolak",
      },
      PENGAJUAN_DITERIMA: {
        value: 3,
        text: "Pengajuan Diterima",
      },
      PERMINTAAN_BARANG_MASUK: {
        value: 4,
        text: "Permintaan Barang Masuk",
      },
      PENGECEKAN_KELAYAKAN: {
        value: 5,
        text: "Pengecekan Kelayakan",
      },
      BARANG_SIAP_DIAMBIL: {
        value: 6,
        text: "Barang Siap Diambil",
      },
      PENGAJUAN_SELESAI: {
        value: 7,
        text: "Pengajuan Selesai",
      },
    }),
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
