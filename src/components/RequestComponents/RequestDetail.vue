<script>
import TypeRequest from "./TypeRequest.vue";
import StatusRequest from "./StatusRequest.vue";
import Modal from "../layouts/Modal.vue";
import { putRequest, downloadFile } from "@/api";
import { formatInTimeZone } from "date-fns-tz";
import FormVerifikasiRequest from "./FormVerifikasiRequest.vue";
import { statusObject, priortyObjectOption } from "@/constants";
import ClickOutside from "vue-click-outside";
export default {
  directives: {
    ClickOutside,
  },
  components: { TypeRequest, StatusRequest, FormVerifikasiRequest, Modal },
  props: {
    detailRequest: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      statusObject,
      priortyObjectOption,
      formUpdateStatus: {
        status: 1,
        notes: "",
      },
    };
  },
  computed: {
    pickUpTime() {
      return formatInTimeZone(
        this.detailRequest.pickup_date,
        "Asia/Bangkok",
        "dd MMMM yyyy"
      );
    },
    isReplacementRequestType() {
      return this.detailRequest.request_type === 2;
    },
    btnApprovalAdmin() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status !== statusObject.PENGAJUAN_DITERIMA.value &&
        this.detailRequest.status !== statusObject.PENGAJUAN_SELESAI.value
      );
    },
    btnApproveStatus() {
      return (
        this.detailRequest.status !== statusObject.PENGAJUAN_DITOLAK.value &&
        this.detailRequest.status !== statusObject.PENGECEKAN_KELAYAKAN.value &&
        this.detailRequest.status !== statusObject.PENGAJUAN_MASUK.value &&
        this.detailRequest.status !== statusObject.BARANG_SIAP_DIAMBIL.value &&
        this.detailRequest.status !== statusObject.BARANG_SUDAH_DIAMBIL.value
      );
    },
    detailRejectedRequest() {
      return this.detailRequest.status === statusObject.PENGAJUAN_DITOLAK.value;
    },
    btnUploadList() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.PENGAJUAN_MASUK.value
      );
    },
    formListItem() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGAJUAN_MASUK.value
      );
    },
    detailListItem() {
      return this.detailRequest.status >= statusObject.PENGAJUAN_DITERIMA.value;
    },
    btnRequestItem() {
      return (
        this.detailRequest.status === statusObject.PENGAJUAN_DITERIMA.value &&
        this.detailRequest.username === this.$store.state.user.profile.name
      );
    },
    formRequestItem() {
      return (
        this.detailRequest.username === this.$store.state.user.profile.name &&
        this.detailRequest.status === statusObject.PENGAJUAN_DITERIMA.value
      );
    },
    detailRequestItem() {
      return this.detailRequest.status > statusObject.PENGAJUAN_DITERIMA.value;
    },
    btnFeasibleCheck() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    formCheckItem() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    detailCheckItem() {
      return (
        this.detailRequest.status > statusObject.PENGECEKAN_KELAYAKAN.value
      );
    },
    btnReceived() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.BARANG_SIAP_DIAMBIL.value
      );
    },
    detailReceivedItem() {
      return this.detailRequest.status > statusObject.BARANG_SIAP_DIAMBIL.value;
    },
    btnPickUpItem() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.BARANG_SUDAH_DIAMBIL.value
      );
    },
    formPickUpItem() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.BARANG_SUDAH_DIAMBIL.value
      );
    },
    detailPickUpItem() {
      return (
        this.detailRequest.status > statusObject.BARANG_SUDAH_DIAMBIL.value
      );
    },
    btnReturnItem() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status == statusObject.PENGAJUAN_SELESAI.value
      );
    },
    formReturnItem() {
      return (
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status === statusObject.PENGAJUAN_SELESAI.value
      );
    },
    detailReturnItem() {
      return (
        this.detailRequest.status === statusObject.PENGEMBALIAN_BARANG.value
      );
    },
    btnVerifikasi() {
      return (
        this.detailRequest.status < statusObject.PENGAJUAN_SELESAI.value &&
        this.detailRequest.status != statusObject.PENGAJUAN_DITOLAK.value &&
        this.$store.state.user.profile.isAdmin === true &&
        this.detailRequest.status !== statusObject.PENGAJUAN_DITERIMA.value
      );
    },
  },
  methods: {
    openModal(name) {
      this.$store.dispatch("modals/open", name);
    },
    getTextRequest(status) {
      if (status === statusObject.PENGAJUAN_MASUK.value) {
        return statusObject.PENGAJUAN_MASUK;
      } else if (status === statusObject.PENGAJUAN_DITERIMA.value) {
        return statusObject.PENGAJUAN_DITERIMA;
      } else if (status === statusObject.PERMINTAAN_BARANG_MASUK.value) {
        return statusObject.PERMINTAAN_BARANG_MASUK;
      } else if (status === statusObject.PENGECEKAN_KELAYAKAN.value) {
        return statusObject.PENGECEKAN_KELAYAKAN;
      } else if (status === statusObject.BARANG_SIAP_DIAMBIL.value) {
        return statusObject.BARANG_SIAP_DIAMBIL;
      } else if (status === statusObject.BARANG_SUDAH_DIAMBIL.value) {
        return statusObject.BARANG_SUDAH_DIAMBIL;
      }
    },
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
        this.formUpdateStatus.status = statusObject.BARANG_SUDAH_DIAMBIL.value;
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
            this.sendStatus(type, status);
          }
        });
    },
    submitRejectedStatus(type, status) {
      this.$Swal
        .fire({
          title: "Tolak Permohonan?",
          text: "Masukan Alasan Penolakan Permohonan!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Kirim!",
          cancelButtonText: "Batalkan",
          input: "textarea",
          inputPlaceholder: "Masukkan detail...",
          inputAttributes: {
            "aria-label": "Type your message here",
            autocapitalize: "off",
            maxlength: 140,
          },
        })
        .then((result) => {
          if (result.isConfirmed && result.value) {
            this.formUpdateStatus.notes = result.value;
            this.sendStatus(type, status);
          } else {
            this.$store.dispatch("sweetalert/errorAlert", {
              title: "Catatan tidak boleh kosong!",
              text: "Gagal update status permohonan",
            });
          }
        });
    },
    sendStatus(type, status) {
      this.updateStatus(type, status);

      const response = putRequest(
        "/requests",
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
    submitFormVerifikasi(status) {
      this.$refs.formVerifikasi.submitFormVerifikasi(status);
    },
    getResponseForm() {
      this.$emit("get-response-form");
    },
    async getFile(filename) {
      try {
        const response = await downloadFile(`files/${filename}`);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(response);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
      } catch (error) {
        this.$store.dispatch("sweetalert/errorAlert", {
          title: "Server Error!",
          text: "Download File Gagal",
        });
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="max-full-screen">
      <div class="flex flex-col">
        <div class="px-5 mb-5 mt-5 bg-gray-50">
          <p class="text-blue-gray-800 font-bold float-left mb-5 mt-5">
            Detail Permohonan Inventaris
          </p>

          <button
            v-if="btnRequestItem"
            class="bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 float-right"
            type="button"
            @click="openModal('verifikasi-request')"
          >
            {{ getTextRequest(detailRequest.status).textBtnVerifikasi }}
          </button>

          <button
            v-if="btnVerifikasi"
            class="bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 float-right"
            type="button"
            @click="openModal('verifikasi-request')"
          >
            {{ getTextRequest(detailRequest.status).textBtnVerifikasi }}
          </button>
        </div>
        <div class="h-[500px] overflow-y-auto flex-row flex-grow">
          <div class="sm:rounded-lg shadow-md">
            <table class="w-full text-sm text-left text-gray-800">
              <thead>
                <tr class="text-xs text-white uppercase bg-blue-800">
                  <th scope="col" class="th-table" colspan="2">
                    Permohonan Barang
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table w-1/6">Nama Pemohon</th>
                  <td class="td-table">{{ detailRequest.username }}</td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table">Jenis Permohonan</th>
                  <td class="td-table">
                    <TypeRequest :request-type="detailRequest.request_type" />
                  </td>
                </tr>

                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table">No Telepon</th>
                  <td class="td-table">{{ detailRequest.phone_number }}</td>
                </tr>

                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table">Unit / Divisi</th>
                  <td class="td-table">{{ detailRequest.division }}</td>
                </tr>

                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table">Barang yang diajukan</th>
                  <td class="td-table">{{ detailRequest.requested_item }}</td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table">Alasan Pengajuan</th>
                  <td class="td-table">{{ detailRequest.purpose }}</td>
                </tr>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table">Tingkat Kebutuhan</th>
                  <td class="td-table">
                    {{
                      detailRequest.priority === priortyObjectOption.BIASA.value
                        ? priortyObjectOption.BIASA.text
                        : priortyObjectOption.URGENT.text
                    }}
                  </td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table">Status</th>
                  <td class="td-table">
                    <StatusRequest :status="detailRequest.status" />
                  </td>
                </tr>

                <tr
                  v-if="isReplacementRequestType"
                  class="bg-gray-100 border-b border-gray-200"
                >
                  <th class="td-table">File Evidence</th>
                  <td class="td-table">
                    <button
                      :class="
                        detailRequest.replacement_evidence
                          ? 'text-blue-500'
                          : 'text-dark'
                      "
                      :disabled="!detailRequest.replacement_evidence"
                      @click="getFile(detailRequest.replacement_evidence)"
                    >
                      Download File
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="detailRejectedRequest"
            class="sm:rounded-lg shadow-md mt-5 mb-5"
          >
            <table class="w-full text-sm text-left text-gray-800">
              <thead>
                <tr class="text-xs text-white uppercase bg-red-800">
                  <th scope="col" class="th-table" colspan="2">
                    Permohonan ditolak
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table w-1/6">Alasan</th>
                  <td class="td-table">{{ detailRequest.notes }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="detailListItem" class="sm:rounded-lg shadow-md mt-5 mb-5">
            <table class="w-full text-sm text-left text-gray-800">
              <thead>
                <tr class="text-xs text-white uppercase bg-blue-800">
                  <th scope="col" class="th-table" colspan="2">
                    File Inventaris
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table w-1/6">File Inventaris</th>
                  <td class="td-table">
                    <button
                      :class="
                        detailRequest.filename ? 'text-blue-500' : 'text-dark'
                      "
                      :disabled="!detailRequest.filename"
                      @click="getFile(detailRequest.filename)"
                    >
                      Download File
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="detailRequestItem"
            class="sm:rounded-lg shadow-md mt-5 mb-5"
          >
            <table class="w-full text-sm text-left text-gray-800">
              <thead>
                <tr class="text-xs text-white uppercase bg-blue-800">
                  <th scope="col" class="th-table" colspan="2">
                    Barang yang diminta
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table w-1/6">Merk Item</th>
                  <td class="td-table">{{ detailRequest.item_brand }}</td>
                </tr>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table w-1/6">Barang yang diminta</th>
                  <td class="td-table">{{ detailRequest.item_name }}</td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table w-1/6">No Barang Inventaris</th>
                  <td class="td-table">{{ detailRequest.item_number }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="detailCheckItem" class="sm:rounded-lg shadow-md mt-5 mb-5">
            <table class="w-full text-sm text-left text-gray-800">
              <thead>
                <tr class="text-xs text-white uppercase bg-blue-800">
                  <th scope="col" class="th-table" colspan="2">
                    Kondisi Barang
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table w-1/6">Kondisi</th>
                  <td class="td-table">{{ detailRequest.notes }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="detailReceivedItem"
            class="sm:rounded-lg shadow-md mt-5 mb-5"
          >
            <table class="w-full text-sm text-left text-gray-800">
              <thead>
                <tr class="text-xs text-white uppercase bg-blue-800">
                  <th scope="col" class="th-table" colspan="2">
                    Pengambilan Barang
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table w-1/6">Tanggal Pengambilan</th>
                  <td class="td-table">{{ pickUpTime }}</td>
                </tr>

                <template v-if="detailPickUpItem">
                  <tr class="bg-white border-b border-gray-200">
                    <th class="td-table w-1/6">Penanda Tangan BAST</th>
                    <td class="td-table">{{ detailRequest.pickup_signing }}</td>
                  </tr>
                  <tr class="bg-gray-100 border-b border-gray-200">
                    <th class="td-table w-1/6">File Evidence</th>
                    <td class="td-table">
                      <button
                        :class="
                          detailRequest.pickup_evidence
                            ? 'text-blue-500'
                            : 'text-dark'
                        "
                        :disabled="!detailRequest.pickup_evidence"
                        @click="getFile(detailRequest.pickup_evidence)"
                      >
                        Download File
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b border-gray-200">
                    <th class="td-table w-1/6">File Bast</th>
                    <td class="td-table">
                      <button
                        :class="
                          detailRequest.pickup_evidence
                            ? 'text-blue-500'
                            : 'text-dark'
                        "
                        :disabled="!detailRequest.pickup_evidence"
                        @click="getFile(detailRequest.pickup_bast)"
                      >
                        Download File
                      </button>
                    </td>
                  </tr></template
                >
              </tbody>
            </table>
          </div>

          <div
            v-if="detailReturnItem"
            class="sm:rounded-lg shadow-md mt-5 mb-5"
          >
            <table class="w-full text-sm text-left text-gray-800">
              <thead>
                <tr class="text-xs text-white uppercase bg-blue-800">
                  <th scope="col" class="th-table" colspan="2">
                    Pengembalian Barang
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table w-1/6">Tanggal Pengembalian</th>
                  <td class="td-table">{{ pickUpTime }}</td>
                </tr>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table w-1/6">Penanda Tangan BAST</th>
                  <td class="td-table">{{ detailRequest.pickup_signing }}</td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200">
                  <th class="td-table w-1/6">File Evidence</th>
                  <td class="td-table">
                    <button class="text-blue-500">Download File</button>
                  </td>
                </tr>
                <tr class="bg-white border-b border-gray-200">
                  <th class="td-table w-1/6">File Bast</th>
                  <td class="td-table">
                    <button class="text-blue-500">Download File</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <Modal name="verifikasi-request">
      <template #header>{{
        getTextRequest(detailRequest.status).headerModal
      }}</template>

      <template #body>
        <FormVerifikasiRequest
          :id="detailRequest.id"
          ref="formVerifikasi"
          :status="detailRequest.status"
          :condition-detail-verifikasi="{
            formListItem: formListItem,
            formRequestItem: formRequestItem,
            formCheckItem: formCheckItem,
            formPickUpItem: formPickUpItem,
            formReturnItem: formReturnItem,
          }"
          @get-response-form-verifikasi="getResponseForm"
      /></template>
      <template v-if="btnApprovalAdmin" #footer>
        <button
          v-if="detailRequest.status === statusObject.PENGAJUAN_MASUK.value"
          class="text-white bg-red-800 border border-solid hover:bg-red-400 active:bg-red-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="submitRejectedStatus('rejected', detailRequest.status)"
        >
          Tolak Permohonan
        </button>
        <button
          v-if="btnApproveStatus"
          class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="submitUpdateStatus('approve', detailRequest.status)"
        >
          {{ getTextRequest(detailRequest.status).textBtnSubmitVerifikasi }}
        </button>
        <button
          v-if="btnReceived"
          class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="submitUpdateStatus('approve', detailRequest.status)"
        >
          {{ getTextRequest(detailRequest.status).textBtnSubmitVerifikasi }}
        </button>
        <button
          v-if="btnFeasibleCheck"
          class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="submitFormVerifikasi(statusObject.BARANG_SIAP_DIAMBIL.value)"
        >
          {{ getTextRequest(detailRequest.status).textBtnSubmitVerifikasi }}
        </button>

        <button
          v-if="btnUploadList"
          class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="submitFormVerifikasi(statusObject.PENGAJUAN_DITERIMA.value)"
        >
          {{ getTextRequest(detailRequest.status).textBtnSubmitVerifikasi }}
        </button>
        <button
          v-if="btnPickUpItem"
          class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="submitFormVerifikasi(statusObject.PENGAJUAN_SELESAI.value)"
        >
          {{ getTextRequest(detailRequest.status).textBtnSubmitVerifikasi }}
        </button>
      </template>
      <template v-else-if="btnRequestItem" #footer>
        <button
          class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="
            submitFormVerifikasi(statusObject.PERMINTAAN_BARANG_MASUK.value)
          "
        >
          {{ getTextRequest(detailRequest.status).textBtnSubmitVerifikasi }}
        </button>
      </template>
      <template v-else-if="btnReturnItem" #footer>
        <button
          class="text-white bg-blue-800 border border-solid hover:bg-blue-400 active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          @click="submitUpdateStatus('approve', detailRequest.status)"
        >
          {{ getTextRequest(detailRequest.status).textBtnSubmitVerifikasi }}
        </button>
      </template>
    </Modal>
  </div>
</template>
