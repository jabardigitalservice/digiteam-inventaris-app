<script>
import Swal from "sweetalert2";
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
      },
    };
  },
  methods: {
    handleSubmit() {
      Swal.fire({
        title: "Ingin mengirim permohonan?",
        text: "Permohonan akan dikirim ke team HR/GA!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Kirim!",
        cancelButtonText: "Batalkan",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Success!",
            text: "Berhasil mengirim permohonan",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.value) {
              this.$router.push("/list-request");
            } else {
              console.log(result.value);
            }
          });
        }
      });
    },
    changeRequestType(e) {
      var valuesOnchange = e.target.value;
      if (valuesOnchange == 2) {
        this.isEvidence = true;
      } else {
        this.isEvidence = false;
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label
      for="request_type"
      class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >Jenis Permohonan</label
    >
    <select
      id="request_type"
      v-model="formRequest.request_type"
      class="bg-white mt-1 w-full p-2.5 block border border-slate-300 text-sm rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      required
      @change="changeRequestType($event)"
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
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        required
      />
    </label>

    <label for="divisi" class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >Unit / Divisi</label
    >
    <select
      id="divisi"
      v-model="formRequest.divisi"
      class="bg-white mt-1 w-full p-2.5 block border border-slate-300 text-sm rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      required
    >
      <option selected="" value="" disabled>Pilih Team Unit / Divisi</option>
      <option value="ITDEV">IT Development</option>
      <option value="DATA">Data</option>
    </select>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700"
        >Barang yang diajukan</span
      >
      <input
        v-model="formRequest.item_name"
        type="text"
        placeholder="Masukan barang yang diajukan"
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        required
      />
    </label>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700"
        >Alasan Pengajuan</span
      >
      <textarea
        v-model="formRequest.purpose"
        placeholder="Masukan alasan pengajuan"
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        required
      ></textarea>
    </label>

    <label
      for="urgency"
      class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >Tingkat Kebutuhan</label
    >
    <select
      id="urgency"
      v-model="formRequest.urgency"
      class="bg-white mt-1 w-full p-2.5 block border border-slate-300 text-sm rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
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
      >Evidence</label
    >

    <label v-if="isEvidence" class="block mt-5">
      <span class="sr-only">Choose evidance</span>
      <input
        type="file"
        class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-blue-gray-700 hover:file:bg-yellow-300"
      />
    </label>

    <div class="submit mt-5">
      <button
        class="mt-5 md:mt-0 mb-5 bg-green-300 hover:bg-green-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center w-full"
      >
        Kirim Permohonan
      </button>
    </div>
  </form>
</template>
