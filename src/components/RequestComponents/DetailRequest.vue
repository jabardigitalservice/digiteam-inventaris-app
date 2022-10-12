<script>
import Modal from "../layouts/Modal.vue";
import TypeRequest from "./TypeRequest.vue";
export default {
  components: { Modal, TypeRequest },
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
          class="block mb-2 text-sm font-bold text-slate-700"
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
      </div>
    </template>
  </Modal>
</template>
