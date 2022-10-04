<script>
export default {
  name: "FormRequest",
  data() {
    return {
      isEvidence: false,
      formRequest: {
        request_type: "",
        name_employee: "",
        divisi: "",
        item_name: "",
        purpose: "",
        urgency: "",
        phone_number: "",
      },
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
            this.$axios
              .post("/item_requests", this.formRequest)
              .then(() => {
                this.$Swal
                  .fire({
                    title: "Success!",
                    text: "Berhasil mengirim permohonan",
                    icon: "success",
                    confirmButtonText: "OK",
                  })
                  .then(() => {
                    // todo : redirect to list request page
                    // this.$router.push("/list-request");
                  });
              })
              .catch((err) => {
                this.$Swal.fire({
                  title: "Server Error!",
                  text: "Gagal mengirim permohonan",
                  icon: "error",
                  confirmButtonText: "OK",
                });
              });
          }
        });
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label
      for="request_type"
      class="block mb-2 text-sm font-bold text-slate-700"
    >
      Jenis Permohonan
    </label>
    <select
      id="request_type"
      v-model="formRequest.request_type"
      class="select-form"
      required
    >
      <option selected="" value="" disabled>Pilih Jenis Permohonan</option>
      <option value="1">Baru</option>
      <option value="2">Tukar</option>
    </select>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700">Nama Pegawai</span>
      <input
        v-model="formRequest.name_employee"
        readonly
        type="text"
        placeholder="Nama pegawai"
        class="input-form"
        required
      />
    </label>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700">No Telepon</span>
      <input
        v-model="formRequest.phone_number"
        readonly
        type="text"
        placeholder="No Telepon"
        class="input-form"
        required
      />
    </label>

    <label
      for="divisi"
      class="block mb-2 text-sm font-bold text-slate-700 mt-5"
    >
      Unit / Divisi
    </label>
    <select
      id="divisi"
      v-model="formRequest.divisi"
      class="select-form"
      required
    >
      <option selected="" value="" disabled>Pilih Team Unit / Divisi</option>
      <option value="ITDEV">IT Development</option>
      <option value="DATA">Data</option>
    </select>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700">
        Barang yang diajukan
      </span>
      <input
        v-model="formRequest.item_name"
        type="text"
        placeholder="Masukan barang yang diajukan"
        class="input-form"
        required
      />
    </label>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700">
        Alasan Pengajuan
      </span>
      <textarea
        v-model="formRequest.purpose"
        placeholder="Masukan alasan pengajuan"
        class="input-form"
        required
      ></textarea>
    </label>

    <label
      for="urgency"
      class="block mb-2 text-sm font-bold text-slate-700 mt-5"
    >
      Tingkat Kebutuhan
    </label>
    <select
      id="urgency"
      v-model="formRequest.urgency"
      class="select-form"
      required
    >
      <option value="" selected="" disabled>Tingkat Kebutuhan</option>
      <option value="1">Biasa</option>
      <option value="2">Urgent</option>
    </select>

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
