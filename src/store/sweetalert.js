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
    CONFIRM_ALERT(state, message) {
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
    confirmAlert({ commit }, message) {
      Swal.fire({
        title: message.title,
        text: message.text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Kirim!",
        cancelButtonText: "Batalkan",
      });
      commit("CONFIRM_ALERT", message);
    },
  },
};

export default store;
