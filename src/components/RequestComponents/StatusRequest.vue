<script>
export default {
  props: { status: Number },
  methods: {
    getStatusLabel(status) {
      switch (status) {
        case 1:
          return "Pengajuan Masuk";
        case 2:
          return "Pengajuan Ditolak";
        case 3:
          return "Pengajuan Diterima";
        case 4:
          return "Permintaan Barang Masuk";
        case 5:
          return "Pengecekan Kelayakan";
        case 6:
          return "Barang Siap Diambil";
        case 7:
          return "Pengajuan Selesai";
        default:
          return "-";
      }
    },
    getColorLabel(status) {
      switch (status) {
        case 1:
          return "bg-blue-100 border-blue-700";
        case 2:
          return "bg-red-100 border-red-700";
        case 3:
        case 4:
        case 5:
        case 6:
          return "bg-yellow-100 border-yellow-700";
        case 7:
          return "bg-green-100 border-green-700";
        default:
          return "-";
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
