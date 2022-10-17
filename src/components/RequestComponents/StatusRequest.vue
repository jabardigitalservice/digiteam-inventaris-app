<script>
export default {
  props: { status: Number },
  methods: {
    getStatusLabel(status) {
      switch (status) {
        case this.$store.state.status.PENGAJUAN_MASUK.value:
          return this.$store.state.status.PENGAJUAN_MASUK.text;
        case this.$store.state.status.PENGAJUAN_DITOLAK.value:
          return this.$store.state.status.PENGAJUAN_DITOLAK.text;
        case this.$store.state.status.PENGAJUAN_DITERIMA.value:
          return this.$store.state.status.PENGAJUAN_DITERIMA.text;
        case this.$store.state.status.PERMINTAAN_BARANG_MASUK.value:
          return this.$store.state.status.PERMINTAAN_BARANG_MASUK.text;
        case this.$store.state.status.PENGECEKAN_KELAYAKAN.value:
          return this.$store.state.status.PENGECEKAN_KELAYAKAN.text;
        case this.$store.state.status.BARANG_SIAP_DIAMBIL.value:
          return this.$store.state.status.BARANG_SIAP_DIAMBIL.text;
        case this.$store.state.status.PENGAJUAN_SELESAI.value:
          return this.$store.state.status.PENGAJUAN_SELESAI.text;
        default:
          return "";
      }
    },
    getColorLabel(status) {
      switch (status) {
        case this.$store.state.status.PENGAJUAN_MASUK.value:
          return "bg-blue-100 border-blue-700";
        case this.$store.state.status.PENGAJUAN_DITOLAK.value:
          return "bg-red-100 border-red-700";
        case this.$store.state.status.PENGAJUAN_DITERIMA.value:
        case this.$store.state.status.PERMINTAAN_BARANG_MASUK.value:
        case this.$store.state.status.PENGECEKAN_KELAYAKAN.value:
        case this.$store.state.status.BARANG_SIAP_DIAMBIL.value:
          return "bg-yellow-100 border-yellow-700";
        case this.$store.state.status.PENGAJUAN_SELESAI.value:
          return "bg-green-100 border-green-700";
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
