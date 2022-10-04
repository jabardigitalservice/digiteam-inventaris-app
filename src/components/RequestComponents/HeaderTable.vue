<script>
import Modal from "../layouts/Modal.vue";
import FormRequest from "./FormRequest.vue";
export default {
  components: {
    Modal,
    FormRequest,
  },
  data() {
    return {
      showModal: false,
      titleModal: "Tambah Data - Permohonan Inventaris",
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<template>
  <div class="mb-5">
    <button
      class="text-blue-700 font-bold hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      type="button"
      @click="toggleModal()"
    >
      Tambah Permohonan
    </button>
    <Modal
      :show-modal="showModal"
      :title-modal="titleModal"
      @closeModal="toggleModal"
    >
      <FormRequest />
    </Modal>
  </div>
</template>
