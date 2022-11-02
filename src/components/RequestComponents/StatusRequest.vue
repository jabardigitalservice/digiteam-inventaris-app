<script>
import { statusObject } from "@/constants";
export default {
  props: { status: { type: Number, default: 0 } },
  methods: {
    getStatusLabel(status) {
      switch (status) {
        case statusObject.PENGAJUAN_MASUK.value:
          return statusObject.PENGAJUAN_MASUK.text;
        case statusObject.PENGAJUAN_DITOLAK.value:
          return statusObject.PENGAJUAN_DITOLAK.text;
        case statusObject.PENGAJUAN_DITERIMA.value:
          return statusObject.PENGAJUAN_DITERIMA.text;
        case statusObject.PERMINTAAN_BARANG_MASUK.value:
          return statusObject.PERMINTAAN_BARANG_MASUK.text;
        case statusObject.PENGECEKAN_KELAYAKAN.value:
          return statusObject.PENGECEKAN_KELAYAKAN.text;
        case statusObject.BARANG_SIAP_DIAMBIL.value:
          return statusObject.BARANG_SIAP_DIAMBIL.text;
        case statusObject.BARANG_SUDAH_DIAMBIL.value:
          return statusObject.BARANG_SUDAH_DIAMBIL.text;
        case statusObject.PENGAJUAN_SELESAI.value:
          return statusObject.PENGAJUAN_SELESAI.text;
        case statusObject.PENGEMBALIAN_BARANG.value:
          return statusObject.PENGEMBALIAN_BARANG.text;
        default:
          return "";
      }
    },
    getColorLabel(status) {
      switch (status) {
        case statusObject.PENGAJUAN_MASUK.value:
          return "bg-blue-100 border-blue-700";
        case statusObject.PENGAJUAN_DITOLAK.value:
          return "bg-red-100 border-red-700";
        case statusObject.PENGAJUAN_DITERIMA.value:
        case statusObject.PERMINTAAN_BARANG_MASUK.value:
        case statusObject.PENGECEKAN_KELAYAKAN.value:
        case statusObject.BARANG_SIAP_DIAMBIL.value:
        case statusObject.BARANG_SUDAH_DIAMBIL.value:
          return "bg-yellow-100 border-yellow-700";
        case statusObject.PENGAJUAN_SELESAI.value:
          return "bg-green-100 border-green-700";
        case statusObject.PENGEMBALIAN_BARANG.value:
          return "bg-purple-100 border-purple-300";
        default:
          return "";
      }
    },
  },
};
</script>

<template>
  <span
    :class="getColorLabel(status)"
    class="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border-2"
    >{{ getStatusLabel(status) }}
  </span>
</template>
