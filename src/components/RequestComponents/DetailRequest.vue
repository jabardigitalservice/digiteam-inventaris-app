<script>
import Modal from "../layouts/Modal.vue";
import TypeRequest from "./TypeRequest.vue";
import StatusRequest from "./StatusRequest.vue";
import { patchRequest } from "@/api";
import DetailVerifikasiRequest from "./DetailVerifikasiRequest.vue";
import FormVerifikasiRequest from "./FormVerifikasiRequest.vue";
import { statusObject, priortyObjectOption } from "@/constants";
export default {
  components: {
    Modal,
    TypeRequest,
    StatusRequest,
    DetailVerifikasiRequest,
    FormVerifikasiRequest,
  },
  props: {
    detailRequest: { type: Object, default: () => ({}) },
    modalName: { type: String, default: "" },
  },
  data() {
    return {
      formUpdateStatus: {
        status: 1,
        notes: "",
      },
      statusObject,
      priortyObjectOption,
      formRequestDetail: false,
    };
  },
  computed: {
    btnApprovalAdmin() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status !== statusObject.PENGAJUAN_DITERIMA.value &&
        this.detailRequest.status !== statusObject.PENGAJUAN_SELESAI.value
      );
    },
    btnApproveStatus() {
      return (
        this.detailRequest.status !== statusObject.PENGAJUAN_DITOLAK.value &&
        this.detailRequest.status !== statusObject.PENGECEKAN_KELAYAKAN.value &&
        this.detailRequest.status !== statusObject.PENGAJUAN_MASUK.value
      );
    },
    btnUploadList() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.PENGAJUAN_MASUK.value
      );
    },
    btnRequestItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.detailRequest.status === statusObject.PENGAJUAN_DITERIMA.value
      );
    },
    formListItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGAJUAN_MASUK.value
      );
    },
    detailListItem() {
      return this.detailRequest.status >= statusObject.PENGAJUAN_DITERIMA.value;
    },
    formRequestItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.detailRequest.username === this.$store.state.user.profile.name &&
        this.detailRequest.status === statusObject.PENGAJUAN_DITERIMA.value
      );
    },
    detailRequestItem() {
      return this.detailRequest.status > statusObject.PENGAJUAN_DITERIMA.value;
    },
    formCheckItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    detailCheckItem() {
      return (
        this.detailRequest.status > statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    rejectedRequest() {
      return this.detailRequest.status === statusObject.PENGAJUAN_DITOLAK.value;
    },
    formPickUpItem() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.BARANG_SIAP_DIAMBIL.value
      );
    },
    listPickUpItem() {
      return this.detailRequest.status > statusObject.BARANG_SIAP_DIAMBIL.value;
    },
    btnSubmitRequestItem() {
      return (
        this.detailRequest.username === this.$store.state.user.profile.name
      );
    },
    btnPengecekanKelayakan() {
      return (
        this.modalName === "verifikasi-request" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    btnReturnItem() {
      return (
        this.modalName === "pengembalian-barang" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.PENGAJUAN_SELESAI.value
      );
    },
    formReturnItem() {
      return (
        this.modalName === "pengembalian-barang" &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGAJUAN_SELESAI.value
      );
    },
    detailReturnItem() {
      return (
        this.detailRequest.status === statusObject.PENGEMBALIAN_BARANG.value
      );
    },
  },
  methods: {
    updateStatus(type, status) {
      if (
        type === "rejected" &&
        status === statusObject.PENGAJUAN_MASUK.value
      ) {
        this.formUpdateStatus.status = statusObject.PENGAJUAN_DITOLAK.value;
      } else if (
        type === "approve" &&
        status === statusObject.PERMINTAAN_BARANG_MASUK.value
      ) {
        this.formUpdateStatus.status = statusObject.PENGECEKAN_KELAYAKAN.value;
      } else if (
        type === "approve" &&
        status === statusObject.PENGECEKAN_KELAYAKAN.value
      ) {
        this.formUpdateStatus.status = statusObject.BARANG_SIAP_DIAMBIL.value;
      } else if (
        type === "approve" &&
        status === statusObject.BARANG_SIAP_DIAMBIL.value
      ) {
        this.formUpdateStatus.status = statusObject.PENGAJUAN_SELESAI.value;
      } else if (
        type === "approve" &&
        status === statusObject.PENGAJUAN_SELESAI.value
      ) {
        this.formUpdateStatus.status = statusObject.PENGEMBALIAN_BARANG.value;
      }
    },
    submitUpdateStatus(type, status) {
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
            this.sendStatus(type, status, "/status");
          }
        });
    },
    submitRejectedStatus(type, status) {
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
          input: "textarea",
          inputPlaceholder: "Masukkan detail catatan...",
          inputAttributes: {
            "aria-label": "Type your message here",
            autocapitalize: "off",
            maxlength: 140,
          },
        })
        .then((result) => {
          if (result.isConfirmed && result.value) {
            this.formUpdateStatus.notes = result.value;
            this.sendStatus(type, status, "/notes");
          } else {
            this.$store.dispatch("sweetalert/errorAlert", {
              title: "Catatan tidak boleh kosong!",
              text: "Gagal update status permohonan",
            });
          }
        });
    },
    sendStatus(type, status, params_url) {
      this.updateStatus(type, status);

      const response = patchRequest(
        "/requests",
        "PATCH",
        params_url,
        this.detailRequest.id,
        this.formUpdateStatus
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
              this.getResponseForm();
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
    },
    submitFormVerifikasi(type) {
      this.$refs.formVerifikasi.submitFormVerifikasi(type);
    },
    getResponseForm() {
      this.$emit("get-response-form");
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
          <span>{{ detailRequest.requested_item }}</span>
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
          <span>{{
            detailRequest.priority === priortyObjectOption.BIASA.value
              ? priortyObjectOption.BIASA.text
              : priortyObjectOption.URGENT.text
          }}</span>
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
            detailListItem: detailListItem,
            detailRequestItem: detailRequestItem,
            detailCheckItem: detailCheckItem,
            listPickUpItem: listPickUpItem,
            detailReturnItem: detailReturnItem,
            rejectedRequest: rejectedRequest,
          }"
          :detail-request="detailRequest"
        />

        <FormVerifikasiRequest
          :id="detailRequest.id"
          ref="formVerifikasi"
          :condition-detail-verifikasi="{
            formListItem: formListItem,
            formRequestItem: formRequestItem,
            formCheckItem: formCheckItem,
            formPickUpItem: formPickUpItem,
            formReturnItem: formReturnItem,
          }"
          @get-response-form-verifikasi="getResponseForm"
        />
      </div>
    </template>
    <template v-if="btnApprovalAdmin" #footer>
      <button
        v-if="detailRequest.status === statusObject.PENGAJUAN_MASUK.value"
        class="text-white bg-red-800 border border-solid hover:bg-red-400 active:bg-red-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="submitRejectedStatus('rejected', detailRequest.status)"
      >
        Reject
      </button>
      <button
        v-if="btnApproveStatus"
        class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="submitUpdateStatus('approve', detailRequest.status)"
      >
        Approve
      </button>
      <button
        v-if="btnPengecekanKelayakan"
        class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="submitFormVerifikasi('notes')"
      >
        Submit
      </button>
      <button
        v-if="btnUploadList"
        class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="submitFormVerifikasi('file')"
      >
        Submit
      </button>
    </template>
    <template v-else-if="btnRequestItem" #footer>
      <button
        v-if="btnSubmitRequestItem"
        class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="submitFormVerifikasi('item')"
      >
        Submit
      </button>
    </template>
    <template v-else-if="btnReturnItem" #footer>
      <button
        class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="submitUpdateStatus('approve', detailRequest.status)"
      >
        Submit
      </button>
    </template>
  </Modal>
</template>
