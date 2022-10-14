<script>
import Modal from "../layouts/Modal.vue";
import TypeRequest from "./TypeRequest.vue";
import StatusRequest from "./StatusRequest.vue";
export default {
  components: { Modal, TypeRequest, StatusRequest },
  props: { detailRequest: Object },
  data() {
    return {
      titleModal: "Detail Data - Permohonan Inventaris",
    };
  },
};
</script>

<template>
  <Modal name="detail-request">
    <template #header>
      {{ titleModal }}
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
      </div>
    </template>
  </Modal>
</template>
