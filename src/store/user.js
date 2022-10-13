import { fetchList } from "@/api";

const store = {
  namespaced: true,
  state: {
    profile: {
      name: "",
      email: "",
      isAdmin: false,
    },
  },
  getters: {
    profile(state, getters) {
      return state.profile;
    },
  },
  mutations: {
    GET_PROFILE(state, profile) {
      state.profile.name = profile.name;
      state.profile.email = profile.email;
      state.profile.isAdmin = profile.isAdmin;
    },
  },
  actions: {
    async getProfile({ dispatch }) {
      try {
        const response = await fetchList("/authentications/profile", "GET");
        dispatch("setUser", response.data);
      } catch (error) {
        dispatch(
          "sweetalert/errorAlert",
          {
            title: "Server Error!",
            text: "Gagal mengambil profile user!",
          },
          { root: true }
        );
      }
    },
    setUser({ commit }, payload) {
      commit("GET_PROFILE", payload);
    },
  },
};

export default store;
