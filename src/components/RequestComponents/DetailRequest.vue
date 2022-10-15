<script>
import Modal from "../layouts/Modal.vue";
import TypeRequest from "./TypeRequest.vue";
import StatusRequest from "./StatusRequest.vue";
import { patchStatus } from "@/api";
export default {
  components: { Modal, TypeRequest, StatusRequest },
  props: { detailRequest: Object, modalName: String },
  data() {
    return {
      updateStatus: {
        status: 1,
      },
    };
  },
  methods: {
    btnUpdateStatus(id, type, status) {
      if (type === "rejected" && status === 1) {
        this.updateStatus.status = 2;
      } else if (type === "approve" && status === 2) {
        this.updateStatus.status = 1;
      } else if (type === "approve" && status === 1) {
        this.updateStatus.status = 3;
      } else if (type === "approve" && status === 3) {
        this.updateStatus.status = 4;
      } else if (type === "approve" && status === 4) {
        this.updateStatus.status = 5;
      } else if (type === "approve" && status === 5) {
        this.updateStatus.status = 6;
      } else if (type === "approve" && status === 6) {
        this.updateStatus.status = 7;
      }

      this.$Swal
        .fire({
          title: "Ingin update status permohonan?",
          text: "Permohonan akan diubah statusnya!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Kirim!",
          cancelButtonText: "Batalkan",
        })
        .then((result) => {
          if (result.isConfirmed) {
            const response = patchStatus(
              "/requests",
              "PATCH",
              id,
              this.updateStatus
            );
            response
              .then(() => {
                this.$store
                  .dispatch("sweetalert/successAlert", {
                    title: "Success",
                    text: "Berhasil update status permohonan",
                  })
                  .then(() => {
                    this.$store.dispatch("modals/close", this.name);
                    this.$emit("get-response-form");
                  });
              })
              .catch((err) => {
                this.messageError = err.response.data.errors;
                if (err.response.data.errors) {
                  this.$store.dispatch("sweetalert/errorAlert", {
                    title: `${err.response.data.errors.status}`,
                    text: "Gagal update status permohonan",
                  });
                } else {
                  this.$store.dispatch("sweetalert/errorAlert", {
                    title: "Server Error!",
                    text: "Gagal update status permohonan",
                  });
                }
              });
          }
        });
    },
  },
};
</script>

<template>
  <Modal :name="modalName">
    <template #header>
      {{ modalName === "detail-request" ? "Detail" : "Verifikasi" }} Data -
      Permohonan Inventaris
    </template>
    <template #body>
      <div>
        <label
          for="request_type"
          class="block text-sm font-bold text-slate-700"
        >
          Jenis Permohonan
        </label>
        <TypeRequest :request-type="detailRequest.request_type" />
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Nama Pegawai</span
          >
          <span>{{ detailRequest.username }}</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700">No Telepon</span>
          <span>{{ detailRequest.phone_number }}</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Unit / Divisi</span
          >
          <span>{{ detailRequest.division }}</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Barang yang diajukan</span
          >
          <span>{{ detailRequest.item_name }}</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Alasan Pengajuan</span
          >
          <span>{{ detailRequest.purpose }}</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Tingkat Kebutuhan</span
          >
          <span>{{ detailRequest.priority === 1 ? "Biasa" : "Urgent" }}</span>
        </label>

        <label
          for="request_type"
          class="block mt-5 text-sm font-bold text-slate-700"
        >
          Status Request
        </label>
        <StatusRequest :status="detailRequest.status" />

        <label v-if="detailRequest.status >= 3" class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Barang yang diminta</span
          >
          <input
            v-if="
              modalName === 'verifikasi-request' &&
              detailRequest.username === $store.state.user.profile.name &&
              detailRequest.status === 3
            "
            type="text"
            placeholder="Barang yang diminta"
            class="input-form"
          />
          <span v-if="detailRequest.status > 3">Macbook M1 (Dummy Data)</span>
        </label>
      </div>
    </template>
    <template
      v-if="
        modalName === 'verifikasi-request' &&
        $store.state.user.profile.isAdmin === true &&
        detailRequest.status != 3 &&
        detailRequest.status != 7
      "
      #footer
    >
      <button
        v-if="detailRequest.status === 1"
        class="text-white bg-red-800 bg-transparent border border-solid hover:bg-red-400 active:bg-red-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="
          btnUpdateStatus(detailRequest.id, 'rejected', detailRequest.status)
        "
      >
        Rejected
      </button>
      <button
        class="text-white bg-blue-800 bg-transparent border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="
          btnUpdateStatus(detailRequest.id, 'approve', detailRequest.status)
        "
      >
        Approve
      </button>
    </template>
    <template
      v-else-if="
        modalName === 'verifikasi-request' && detailRequest.status == 3
      "
      #footer
    >
      <button
        v-if="detailRequest.username === $store.state.user.profile.name"
        class="text-white bg-blue-800 bg-transparent border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="
          btnUpdateStatus(detailRequest.id, 'approve', detailRequest.status)
        "
      >
        Submit
      </button>
    </template>
  </Modal>
</template>
