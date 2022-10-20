<script>
import HRCenter from "../layouts/HRCenter.vue";
export default {
  components: { HRCenter },
  props: { conditionDetailVerifikasi: Object },
};
</script>

<template>
  <div>
    <label v-if="conditionDetailVerifikasi.detailListItem" class="block mt-5">
      <HRCenter>
        <template #title>List Request</template>
      </HRCenter>
      <span class="block text-sm font-bold text-slate-700">List Request</span>
      <a href="" class="text-blue-500">Download List Request</a>
    </label>

    <template v-if="conditionDetailVerifikasi.detailRequestItem">
      <HRCenter>
        <template #title>Detail Barang yang diminta</template>
      </HRCenter>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Jenis Item yang diminta</span
        >

        <span>Laptop</span>
      </label>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700">Merk Item</span>

        <span>Apple</span>
      </label>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Barang yang diminta</span
        >

        <span>Macbook M1 (Dummy Data)</span>
      </label>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >No Barang Inventaris</span
        >

        <span>13-0-011-023</span>
      </label>
    </template>

    <label v-if="conditionDetailVerifikasi.detailCheckItem" class="block mt-5">
      <HRCenter>
        <template #title>Notes Barang</template>
      </HRCenter>

      <span class="block text-sm font-bold text-slate-700"
        >Notes Pengecekan Barang</span
      >
      <span>Barang ada dent di layar dan death pixel</span>
    </label>

    <template v-if="conditionDetailVerifikasi.ListPickUpItem">
      <HRCenter>
        <template #title>Detail Pengambilan Barang</template>
      </HRCenter>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Tanggal Pengambilan</span
        >
        <span>17-10-2022</span>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Penanda Tangan BAST Pengambilan</span
        >
        <span>Ray F S HRD</span>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Evidence Pengambilan</span
        >
        <a href="" class="text-blue-500">Download Evidence Pengambilan</a>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >BAST Pengambilan</span
        >
        <a href="" class="text-blue-500">Download BAST Pengambilan</a>
      </label>
    </template>

    <template v-if="conditionDetailVerifikasi.detailReturnItem">
      <HRCenter>
        <template #title>Detail Pengembalian Barang</template>
      </HRCenter>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Tanggal Pengembalian</span
        >
        <span>17-10-2023</span>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Penanda Tangan BAST Pengembalian</span
        >
        <span>Ray F S HRD</span>
      </label>

      <span class="block text-sm font-bold text-slate-700 mt-5"
        >Notes Pengembalian Barang</span
      >
      <span>barang saat dikembalikan dalam kondisi baik dan lecet fisik</span>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Evidence Pengembalian</span
        >
        <a href="" class="text-blue-500">Download Evidence Pengembalian</a>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >BAST Pengembalian</span
        >
        <a href="" class="text-blue-500">Download BAST Pengembalian</a>
      </label>
    </template>
  </div>
</template>
