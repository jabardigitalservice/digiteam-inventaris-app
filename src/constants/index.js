export const statusObject = Object.freeze({
  PENGAJUAN_MASUK: {
    value: 1,
    text: "Pengajuan Masuk",
  },
  PENGAJUAN_DITOLAK: {
    value: 2,
    text: "Pengajuan Ditolak",
  },
  PENGAJUAN_DITERIMA: {
    value: 3,
    text: "Pengajuan Diterima",
  },
  PERMINTAAN_BARANG_MASUK: {
    value: 4,
    text: "Permintaan Barang Masuk",
  },
  PENGECEKAN_KELAYAKAN: {
    value: 5,
    text: "Pengecekan Kelayakan",
  },
  BARANG_SIAP_DIAMBIL: {
    value: 6,
    text: "Barang Siap Diambil",
  },
  PENGAJUAN_SELESAI: {
    value: 7,
    text: "Pengajuan Selesai",
  },
  PENGEMBALIAN_BARANG: {
    value: 8,
    text: "Barang Sudah dikembalikan",
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
    text: "Urgent",
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
