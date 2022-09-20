<script>
import Swal from "sweetalert2";
export default {
  name: "FormRequest",
  data() {
    return {
      formRequest: {
        request_type: "",
        name_employee: "",
        unit_divisi: "",
        item_request: "",
        reason: "",
        urgentsi: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      //   alert("submited");
      //   console.log(this.formRequest);
      Swal.fire({
        title: "Success!",
        text: "Berhasil mengirim permohonan",
        icon: "success",
        confirmButtonText: "OK",
      });
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
    >
      <option selected="" value="" disabled>Pilih Jenis Permohonan</option>
      <option value="1">Baru</option>
      <option value="2">Tukar</option>
    </select>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700">Nama Pegawai</span>
      <input
        v-model="formRequest.name_employee"
        type="text"
        placeholder="Nama pegawai"
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        required
      />
    </label>

    <label
      for="unit_divisi"
      class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >Unit / Divisi</label
    >
    <select
      id="unit_divisi"
      v-model="formRequest.unit_divisi"
      class="bg-white mt-1 w-full p-2.5 block border border-slate-300 text-sm rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      required
    >
      <option selected="" value="" disabled>Pilih Team Unit / Divisi</option>
      <option value="1">IT Development</option>
      <option value="2">Data</option>
    </select>

    <label class="block mt-5">
      <span class="block text-sm font-bold text-slate-700"
        >Barang yang diajukan</span
      >
      <input
        v-model="formRequest.item_request"
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
        v-model="formRequest.reason"
        placeholder="Masukan alasan pengajuan"
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        required
      ></textarea>
    </label>

    <label
      for="urgentsi"
      class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >Tingkat Kebutuhan</label
    >
    <select
      id="urgentsi"
      v-model="formRequest.urgentsi"
      class="bg-white mt-1 w-full p-2.5 block border border-slate-300 text-sm rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      required
    >
      <option value="" selected="" disabled>Tingkat Kebutuhan</option>
      <option value="1">Biasa</option>
      <option value="2">Urgent</option>
    </select>

    <div class="submit mt-5">
      <button
        class="mt-5 md:mt-0 mb-5 bg-blue-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center w-full"
      >
        Kirim Permohonan
      </button>
    </div>
  </form>
</template>
