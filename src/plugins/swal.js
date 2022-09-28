import Swal from "sweetalert2";
import Vue from "vue";

export default {
  install() {
    Vue.prototype.$Swal = Swal;
  },
};
