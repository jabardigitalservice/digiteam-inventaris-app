export const statusObject = Object.freeze({
  PENGAJUAN_MASUK: {
    value: 1,
    textStatus: "Pengajuan Masuk",
    textBtnVerifikasi: "Kirim File List Inventaris",
    textBtnSubmitVerifikasi: "Kirim file",
    headerModal: "Form Pengiriman File Inventaris",
  },
  PENGAJUAN_DITOLAK: {
    value: 2,
    textStatus: "Pengajuan Ditolak",
  },
  PENGAJUAN_DITERIMA: {
    value: 3,
    textStatus: "Pengajuan Diterima",
    textBtnVerifikasi: "Lengkapi Data Permohonan Inventaris",
    textBtnSubmitVerifikasi: "Kirim Data Permohonan",
    headerModal: "Form Data Inventaris Yang Diminta",
  },
  PERMINTAAN_BARANG_MASUK: {
    value: 4,
    textStatus: "Permintaan Barang Masuk",
    textBtnVerifikasi: "Konfirmasi Permohonan Inventaris",
    textBtnSubmitVerifikasi: "Setujui Permohonan",
    headerModal: "Form Konfirmasi Permohonan Inventaris",
  },
  PENGECEKAN_KELAYAKAN: {
    value: 5,
    textStatus: "Pengecekan Kelayakan",
    textBtnVerifikasi: "Kirim Data Kondisi Barang",
    textBtnSubmitVerifikasi: "Kirim Catatan Barang",
    headerModal: "Form Pengecekan Kelayakan",
  },
  BARANG_SIAP_DIAMBIL: {
    value: 6,
    textStatus: "Barang Siap Diambil",
    textBtnVerifikasi: "Konfirmasi Pengambilan Barang",
    textBtnSubmitVerifikasi: "Konfirmasi Pengambilan",
    headerModal: "Form Konfirmasi Pengambilan Barang",
  },
  BARANG_SUDAH_DIAMBIL: {
    value: 7,
    textStatus: "Barang Sudah Diambil",
    textBtnVerifikasi: "Kirim File Evidence dan BAST",
    textBtnSubmitVerifikasi: "Kirim file",
    headerModal: "Form Evidence dan BAST",
  },
  PENGAJUAN_SELESAI: {
    value: 8,
    textStatus: "Pengajuan Selesai",
  },
  PENGEMBALIAN_BARANG: {
    value: 9,
    textStatus: "Barang Sudah dikembalikan",
  },
});

export const divisiArrayOption = ["IT DEV", "DATA", "PROJECT MANAGER"];

export const priortyObjectOption = Object.freeze({
  BIASA: {
    value: 1,
    text: "Biasa",
  },
  URGENT: {
    value: 2,
    text: "Menndesak",
  },
});

export const typeRequestObjectOption = Object.freeze({
  BARU: {
    value: 1,
    text: "Baru",
  },
  TUKAR: {
    value: 2,
    text: "Tukar",
  },
});

export const typeItemObjectOption = ["LAPTOP", "HANDPHONE", "ATK"];
