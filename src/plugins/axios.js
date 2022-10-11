import axios from "axios";
import Vue from "vue";
import Cookies from "js-cookie";
import VuexStore from "../store";
const productionInstance = createInstance(import.meta.env.VITE_STAGING_API_URL);
function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
}

export default {
  install() {
    Vue.prototype.$axios = productionInstance;
  },
};
