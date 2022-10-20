<script>
import HRCenter from "../layouts/HRCenter.vue";
import { typeItemObjectOption } from "@/constants";
export default {
  components: { HRCenter },
  props: { conditionDetailVerifikasi: Object },
  data() {
    return {
      typeItemObjectOption,
    };
  },
};
</script>
<template>
  <form>
    <template v-if="conditionDetailVerifikasi.formListItem">
      <HRCenter>
        <template #title>List Request</template>
      </HRCenter>
      <label
        for="evidence"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        List Item
      </label>

      <label class="block mt-5">
        <span class="sr-only">Tambah File +</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
        />
      </label>
    </template>

    <template v-if="conditionDetailVerifikasi.formRequestItem">
      <HRCenter>
        <template #title>Detail Barang yang diminta</template>
      </HRCenter>
      <label
        for="divisi"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        Jenis Item
      </label>
      <select id="type_item" class="select-form">
        <option selected value="" disabled hidden>
          Pilih Jenis Item yang diajukan
        </option>
        <option
          v-for="(typeItem, index) in typeItemObjectOption"
          :key="index"
          :value="typeItem"
        >
          {{ typeItem }}
        </option>
      </select>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700">Merk Item</span>
        <input
          type="text"
          placeholder="Merk item yang diminta"
          class="input-form"
        />
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Barang yang diminta</span
        >
        <input
          type="text"
          placeholder="Masukkan barang yang diminta"
          class="input-form"
        />
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >No Barang Inventaris</span
        >
        <input
          type="text"
          placeholder="Masukkan no barang inventaris"
          class="input-form"
        />
      </label>
    </template>

    <label v-if="conditionDetailVerifikasi.formCheckItem" class="block mt-5">
      <HRCenter>
        <template #title>Notes Barang</template>
      </HRCenter>
      <span class="block text-sm font-bold text-slate-700">
        Notes Pengecekan Barang
      </span>
      <textarea
        placeholder="Masukkan Notes Pengecekan Barang"
        rows="6"
        class="input-form"
      ></textarea>
    </label>

    <template v-if="conditionDetailVerifikasi.formPickUpItem">
      <HRCenter>
        <template #title>Detail Pengambilan Barang</template>
      </HRCenter>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Tanggal Pengambilan</span
        >
        <input
          type="date"
          placeholder="Masukkan Tanggal Pengambilan"
          class="input-form"
        />
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Penanda Tangan BAST Pengambilan</span
        >
        <input
          type="text"
          placeholder="Masukkan Penanda Tangan BAST Pengambilan"
          class="input-form"
        />
      </label>

      <label
        for="evidence"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        Evidence Pengambilan
      </label>

      <label class="block mt-5">
        <span class="sr-only">Tambah File +</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
        />
      </label>

      <label
        for="evidence"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        BAST Pengambilan
      </label>

      <label class="block mt-5">
        <span class="sr-only">Tambah File +</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
        />
      </label>
    </template>

    <template v-if="conditionDetailVerifikasi.formReturnItem">
      <HRCenter>
        <template #title>Detail Pengembalian Barang</template>
      </HRCenter>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Tanggal Pengembalian</span
        >
        <input
          type="date"
          placeholder="Masukkan Tanggal Pengembalian"
          class="input-form"
        />
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Penanda Tangan BAST Pengembalian</span
        >
        <input
          type="text"
          placeholder="Masukkan Penanda Tangan BAS PengembalianT"
          class="input-form"
        />
      </label>

      <span class="block text-sm font-bold text-slate-700 mt-5">
        Notes Pengembalian Barang
      </span>
      <textarea
        placeholder="Masukkan Notes Pengembalian Barang"
        rows="6"
        class="input-form"
      ></textarea>

      <label
        for="evidence"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        Evidence Pengembalian
      </label>

      <label class="block mt-5">
        <span class="sr-only">Tambah File +</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
        />
      </label>

      <label
        for="evidence"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        BAST Pengembalian
      </label>

      <label class="block mt-5">
        <span class="sr-only">Tambah File +</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
        />
      </label>
    </template>
  </form>
</template>
