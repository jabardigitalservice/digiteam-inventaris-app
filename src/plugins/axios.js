import axios from "axios";

const instance = axios.create({
  baseURL: "myapp/api/",
});

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, "$axios", { value: instance });
  },
};
