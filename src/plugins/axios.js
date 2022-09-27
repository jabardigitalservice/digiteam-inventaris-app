import axios from "redaxios";
import Vue from "vue";

const devInstance = createInstance(import.meta.env.VITE_API_URL);
const productionInstance = createInstance(import.meta.env.VITE_API_URL); // will change later

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization: `Bearer ${localStorage.token}`,
    // } << todo,
  });
}

export default {
  install() {
    Vue.prototype.$axios = devInstance;
  },
};
