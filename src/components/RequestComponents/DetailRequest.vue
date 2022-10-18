<script>
import Modal from "../layouts/Modal.vue";
import TypeRequest from "./TypeRequest.vue";
import StatusRequest from "./StatusRequest.vue";
import { patchStatus } from "@/api";
import DetailVerifikasiRequest from "./DetailVerifikasiRequest.vue";
import FormVerifikasiRequest from "./FormVerifikasiRequest.vue";
import { statusObject } from "@/constants";
export default {
  components: {
    Modal,
    TypeRequest,
    StatusRequest,
    DetailVerifikasiRequest,
    FormVerifikasiRequest,
  },
  props: { detailRequest: Object, modalName: String },
  data() {
    return {
      statusObject: {
        status: 1,
      },
    };
  },
  computed: {
    btnApprovalForAdmin() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status != statusObject.PENGAJUAN_DITERIMA.value &&
        this.detailRequest.status != statusObject.PENGAJUAN_SELESAI.value
      );
    },
    btnSubmitRequestItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.detailRequest.status == statusObject.PENGAJUAN_DITERIMA.value
      );
    },
    sendListItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGAJUAN_MASUK.value
      );
    },
    succesSendListItem() {
      return this.detailRequest.status >= statusObject.PENGAJUAN_DITERIMA.value;
    },
    sendRequestItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.detailRequest.username === this.$store.state.user.profile.name &&
        this.detailRequest.status === statusObject.PENGAJUAN_DITERIMA.value
      );
    },
    successSendRequestItem() {
      return this.detailRequest.status > statusObject.PENGAJUAN_DITERIMA.value;
    },
    checkItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    successCheckItem() {
      return (
        this.detailRequest.status > statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    readyToPickUp() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.BARANG_SIAP_DIAMBIL.value
      );
    },
    successPickUp() {
      return this.detailRequest.status > statusObject.BARANG_SIAP_DIAMBIL.value;
    },
    showButtonIfMyRequest() {
      return (
        this.detailRequest.username === this.$store.state.user.profile.name
      );
    },
    btnPengembalianItem() {
      return (
        this.modalName === "pengembalian-barang" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.PENGAJUAN_SELESAI.value
      );
    },
    sendPengembalianBarang() {
      return (
        this.modalName === "pengembalian-barang" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGAJUAN_SELESAI.value
      );
    },
    successPengambalianItem() {
      return (
        this.detailRequest.status == statusObject.PENGEMBALIAN_BARANG.value
      );
    },
  },
  methods: {
    updateStatus(type, status) {
      if (
        type === "rejected" &&
        status === statusObject.PENGAJUAN_MASUK.value
      ) {
        this.statusObject.status = statusObject.PENGAJUAN_DITOLAK.value;
      } else if (
        type === "approve" &&
        status === statusObject.PENGAJUAN_DITOLAK.value
      ) {
        this.statusObject.status = statusObject.PENGAJUAN_MASUK.value;
      } else if (
        type === "approve" &&
        status === statusObject.PENGAJUAN_MASUK.value
      ) {
        this.statusObject.status = statusObject.PENGAJUAN_DITERIMA.value;
      } else if (
        type === "approve" &&
        status === statusObject.PENGAJUAN_DITERIMA.value
      ) {
        this.statusObject.status = statusObject.PERMINTAAN_BARANG_MASUK.value;
      } else if (
        type === "approve" &&
        status === statusObject.PERMINTAAN_BARANG_MASUK.value
      ) {
        this.statusObject.status = statusObject.PENGECEKAN_KELAYAKAN.value;
      } else if (
        type === "approve" &&
        status === statusObject.PENGECEKAN_KELAYAKAN.value
      ) {
        this.statusObject.status = statusObject.BARANG_SIAP_DIAMBIL.value;
      } else if (
        type === "approve" &&
        status === statusObject.BARANG_SIAP_DIAMBIL.value
      ) {
        this.statusObject.status = statusObject.PENGAJUAN_SELESAI.value;
      } else if (
        type === "approve" &&
        status === statusObject.PENGAJUAN_SELESAI.value
      ) {
        this.statusObject.status = statusObject.PENGEMBALIAN_BARANG.value;
      }
    },
    submitUpdateStatus(id, type, status) {
      this.updateStatus(type, status);
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
              this.statusObject
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

        <DetailVerifikasiRequest
          :condition-detail-verifikasi="{
            succesSendListItem: succesSendListItem,
            successSendRequestItem: successSendRequestItem,
            successCheckItem: successCheckItem,
            successPickUp: successPickUp,
            successPengambalianItem: successPengambalianItem,
          }"
        />

        <FormVerifikasiRequest
          :condition-detail-verifikasi="{
            sendListItem: sendListItem,
            sendRequestItem: sendRequestItem,
            checkItem: checkItem,
            readyToPickUp: readyToPickUp,
            sendPengembalianBarang: sendPengembalianBarang,
          }"
        />
      </div>
    </template>
    <template v-if="btnApprovalForAdmin" #footer>
      <button
        v-if="detailRequest.status === 1"
        class="text-white bg-red-800 bg-transparent border border-solid hover:bg-red-400 active:bg-red-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="
          submitUpdateStatus(detailRequest.id, 'rejected', detailRequest.status)
        "
      >
        Rejected
      </button>
      <button
        class="text-white bg-blue-800 bg-transparent border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="
          submitUpdateStatus(detailRequest.id, 'approve', detailRequest.status)
        "
      >
        Approve
      </button>
    </template>
    <template v-else-if="btnSubmitRequestItem" #footer>
      <button
        v-if="showButtonIfMyRequest"
        class="text-white bg-blue-800 bg-transparent border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="
          submitUpdateStatus(detailRequest.id, 'approve', detailRequest.status)
        "
      >
        Submit
      </button>
    </template>
    <template v-else-if="btnPengembalianItem" #footer>
      <button
        class="text-white bg-blue-800 bg-transparent border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="
          submitUpdateStatus(detailRequest.id, 'approve', detailRequest.status)
        "
      >
        Submit
      </button>
    </template>
  </Modal>
</template>
