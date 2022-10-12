const store = {
  namespaced: true,
  state: {
    open: [],
  },
  getters: {
    allOpen: (state) => state.open,
  },
  mutations: {
    OPEN(state, payload) {
      state.open.unshift(payload);
    },
    CLOSE(state, payload) {
      state.open = state.open.filter((e) => {
        e !== payload;
      });
    },
  },
  actions: {
    open({ commit }, payload) {
      commit("OPEN", payload);
    },
    close({ commit }, payload) {
      commit("CLOSE", payload);
    },
  },
};

export default store;
