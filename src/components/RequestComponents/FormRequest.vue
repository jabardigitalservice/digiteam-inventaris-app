<script>
import TextError from "../layouts/TextError.vue";
import Modal from "../layouts/Modal.vue";
export default {
  name: "FormRequest",
  components: { TextError, Modal },
  data() {
    return {
      titleModal: "Tambah Data - Permohonan Inventaris",
      isEvidence: false,
      formRequest: {
        request_type: "",
        name_employee: "",
        division: "",
        item_name: "",
        purpose: "",
        priority: "",
        phone_number: "",
      },
      messageError: {},
    };
  },
  watch: {
    "formRequest.request_type"(val) {
      if (val == 2) {
        this.isEvidence = true;
      } else {
        this.isEvidence = false;
      }
    },
  },
  methods: {
    handleSubmit() {
      this.$Swal
        .fire({
          title: "Ingin mengirim permohonan?",
          text: "Permohonan akan dikirim ke team HR/GA!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Kirim!",
          cancelButtonText: "Batalkan",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.formRequest;
            this.$axios
              .post("/requests", this.formRequest)
              .then((response) => {
                this.$Swal
                  .fire({
                    title: "Success!",
                    text: "Berhasil mengirim permohonan",
                    icon: "success",
                    confirmButtonText: "OK",
                  })
                  .then(() => {
                    this.$store.dispatch("modals/close", this.name);
                    // todo : redirect to list request page
                    // this.$router.push("/list-request");
                  });
              })
              .catch((err) => {
                this.messageError = err.response.data.errors;
                if (err.response.data.errors) {
                  this.$Swal.fire({
                    title: "Data kurang lengkap!",
                    text: "Gagal mengirim permohonan",
                    icon: "error",
                    confirmButtonText: "OK",
                  });
                } else {
                  this.$Swal.fire({
                    title: "Server Error!",
                    text: "Gagal mengirim permohonan",
                    icon: "error",
                    confirmButtonText: "OK",
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
  <Modal name="add-request">
    <template #header>
      {{ titleModal }}
    </template>
    <template #body>
      <form>
        <label
          for="request_type"
          class="block mb-2 text-sm font-bold text-slate-700"
        >
          Jenis Permohonan
        </label>
        <select
          id="request_type"
          v-model.number="formRequest.request_type"
          required
          class="select-form"
        >
          <option selected="" value="" disabled>Pilih Jenis Permohonan</option>
          <option value="1">Baru</option>
          <option value="2">Tukar</option>
        </select>

        <TextError
          v-if="messageError.request_type"
          :text-error="messageError.request_type"
        />

        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700"
            >Nama Pegawai</span
          >
          <input
            v-model="formRequest.name_employee"
            readonly
            type="text"
            placeholder="Nama pegawai"
            class="input-form"
          />
        </label>

        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700">No Telepon</span>
          <input
            v-model="formRequest.phone_number"
            type="text"
            placeholder="No Telepon"
            class="input-form"
          />
        </label>
        <TextError
          v-if="messageError.phone_number"
          :text-error="messageError.phone_number"
        />

        <label
          for="divisi"
          class="block mb-2 text-sm font-bold text-slate-700 mt-5"
        >
          Unit / Divisi
        </label>
        <select id="divisi" v-model="formRequest.division" class="select-form">
          <option selected="" value="" disabled>
            Pilih Team Unit / Divisi
          </option>
          <option value="ITDEV">IT Development</option>
          <option value="DATA">Data</option>
        </select>
        <TextError
          v-if="messageError.division"
          :text-error="messageError.division"
        />

        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700">
            Barang yang diajukan
          </span>
          <input
            v-model="formRequest.item_name"
            type="text"
            placeholder="Masukan barang yang diajukan"
            class="input-form"
          />
        </label>
        <TextError
          v-if="messageError.item_name"
          :text-error="messageError.item_name"
        />

        <label class="block mt-5">
          <span class="block text-sm font-bold text-slate-700">
            Alasan Pengajuan
          </span>
          <textarea
            v-model="formRequest.purpose"
            placeholder="Masukan alasan pengajuan"
            class="input-form"
          ></textarea>
        </label>
        <TextError
          v-if="messageError.purpose"
          :text-error="messageError.purpose"
        />

        <label
          for="urgency"
          class="block mb-2 text-sm font-bold text-slate-700 mt-5"
        >
          Tingkat Kebutuhan
        </label>
        <select
          id="urgency"
          v-model.number="formRequest.priority"
          class="select-form"
        >
          <option value="" selected="" disabled>Tingkat Kebutuhan</option>
          <option value="1">Biasa</option>
          <option value="2">Urgent</option>
        </select>
        <TextError
          v-if="messageError.priority"
          :text-error="messageError.priority"
        />

        <label
          v-if="isEvidence"
          for="evidence"
          class="block mb-2 text-sm font-bold text-slate-700 mt-5"
        >
          Evidence
        </label>

        <label v-if="isEvidence" class="block mt-5">
          <span class="sr-only">Tambah File +</span>
          <input
            type="file"
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
          />
        </label>
      </form>
    </template>
    <template #footer>
      <button
        class="text-blue-800 bg-transparent border border-solid border-blue-800 hover:bg-blue-800 hover:text-white active:bg-blue-900 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="handleSubmit"
      >
        Tambahkan
      </button>
    </template>
  </Modal>
</template>
