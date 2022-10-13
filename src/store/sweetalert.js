import Swal from "sweetalert2";

const store = {
  namespaced: true,
  state: {
    message: {},
  },
  getters: {
    message: (state, getters) => {
      return state.message;
    },
  },
  mutations: {
    SUCCESS_ALERT(state, message) {
      state.message = message;
    },
    ERROR_ALERT(state, message) {
      state.message = message;
    },
  },
  actions: {
    successAlert({ commit }, message) {
      Swal.fire({
        title: message.title,
        text: message.text,
        icon: "success",
        confirmButtonText: "OK",
      });
      commit("SUCCESS_ALERT", message);
    },
    errorAlert({ commit }, message) {
      Swal.fire({
        title: message.title,
        text: message.text,
        icon: "error",
        confirmButtonText: "OK",
      });
      commit("ERROR_ALERT", message);
    },
  },
};

export default store;
