<script>
import Modal from "../layouts/Modal.vue";
import TypeRequest from "./TypeRequest.vue";
import StatusRequest from "./StatusRequest.vue";
export default {
  components: { Modal, TypeRequest, StatusRequest },
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
          class="block mt-5 text-sm font-bold text-slate-700"
        >
          Jenis Permohonan
        </label>
        <TypeRequest :request-type="1" />
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Nama Pegawai</span
          >
          <span>Ray</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700">No Telepon</span>
          <span>08780000000</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Unit / Divisi</span
          >
          <span>IT Development</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Barang yang diajukan</span
          >
          <span>Laptop</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Alasan Pengajuan</span
          >
          <span>Laptop saya rusak</span>
        </label>
        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Tingkat Kebutuhan</span
          >
          <span>Urgent</span>
        </label>

        <label
          for="request_type"
          class="block mt-5 text-sm font-bold text-slate-700"
        >
          Status Request
        </label>
        <StatusRequest :status="1" />
      </div>
    </template>
  </Modal>
</template>
