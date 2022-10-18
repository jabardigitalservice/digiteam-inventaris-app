<script>
import { statusObject } from "@/constants";
export default {
  props: { id: String, type: String, status: Number },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    btnPengembalian() {
      return (
        this.status === statusObject.PENGAJUAN_SELESAI.value &&
        this.$store.state.user.profile.isAdmin
      );
    },
    btnVerifikasi() {
      return status < statusObject.PENGAJUAN_SELESAI.value;
    },
  },
  methods: {
    open(name) {
      this.$store.dispatch("modals/open", name);
      this.show = !this.show;
      this.$emit("get-id-request", this.id, this.type, name);
    },
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div>
      <div class="dropdown">
        <button
          id="action-button"
          class="dropdown-toggle text-blue-700 font-bold hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center whitespace-nowrap"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          @click="show = !show"
        >
          Aksi
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            class="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </button>
        <ul
          v-show="show"
          class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
          aria-labelledby="action Button"
        >
          <li>
            <button
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              @click="open('detail-request')"
            >
              Detail
            </button>
          </li>
          <li v-if="btnVerifikasi">
            <button
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              @click="open('verifikasi-request')"
            >
              Verifikasi
            </button>
          </li>
          <li v-if="btnPengembalian">
            <button
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              @click="open('pengembalian-barang')"
            >
              Pengembalian
            </button>
          </li>
          <li>
            <button
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            >
              Hapus
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
