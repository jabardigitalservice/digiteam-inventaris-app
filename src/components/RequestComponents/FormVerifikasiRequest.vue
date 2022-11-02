<script>
import HRCenter from "../layouts/HRCenter.vue";
import { typeItemObjectOption } from "@/constants";
import { patchRequest } from "@/api";
import TextError from "../layouts/TextError.vue";
export default {
  components: { HRCenter, TextError },
  props: {
    conditionDetailVerifikasi: { type: Object, default: () => ({}) },
    id: { type: String, default: "" },
  },
  data() {
    return {
      typeItemObjectOption,
      formRequestDetail: {
        item_name: "",
        item_brand: "",
        item_number: "",
      },
      formUpdateStatus: {
        status: 6,
        notes: "",
      },
      messageError: {},
      response: "",
      fileImage: null,
      attachment: "",
    };
  },
  methods: {
    submitFormVerifikasi(type) {
      this.$Swal
        .fire({
          title: "Ingin mengirim permohonan barang?",
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
            if (type === "item") {
              this.response = patchRequest(
                "/requests",
                "PATCH",
                "",
                this.id,
                this.formRequestDetail
              );
            } else if (type === "notes") {
              this.response = patchRequest(
                "/requests",
                "PATCH",
                "/notes",
                this.id,
                this.formUpdateStatus
              );
            } else if (type === "file") {
              this.response = patchRequest(
                "/requests",
                "POST",
                "/upload",
                this.id,
                this.fileImage
              );
            }

            this.response
              .then(() => {
                this.$store
                  .dispatch("sweetalert/successAlert", {
                    title: "Success",
                    text: "Berhasil mengirim permohonan barang",
                  })
                  .then(() => {
                    this.resetForm();
                  });
              })
              .catch((err) => {
                this.messageError = err.response.data.errors;
                if (err.response.data.errors) {
                  this.$store.dispatch("sweetalert/errorAlert", {
                    title: "Data kurang lengkap!",
                    text: "Gagal mengirim permohonan barang",
                  });
                } else {
                  this.$store.dispatch("sweetalert/errorAlert", {
                    title: "Server Error!",
                    text: "Gagal mengirim permohonan barang",
                  });
                }
              });
          }
        });
    },
    resetForm() {
      this.$store.dispatch("modals/close", this.name);
      this.$emit("get-response-form-verifikasi");
    },
    onFileChange() {
      if (this.$refs.file.files[0]) {
        const isValidFormat = [
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-excel",
        ].includes(this.$refs.file.files[0].type);
        if (isValidFormat) {
          this.setFile(this.$refs.file.files[0]);
        } else {
          this.$store.dispatch("sweetalert/errorAlert", {
            title: "File ini tidak didukung!",
            text: "Silakan ganti file dengan format yg sesuai!",
          });
          this.$refs.file.value = null;
          this.fileImage = null;
        }
      }
    },
    setFile(value) {
      const formData = new FormData();
      formData.append("file", value);
      this.fileImage = formData;
    },
  },
};
</script>
<template>
  <div>
    <template v-if="conditionDetailVerifikasi.formListItem">
      <HRCenter>
        <template #title>List Request </template>
      </HRCenter>
      <form>
        <label
          for="evidence"
          class="block mb-2 text-sm font-bold text-slate-700 mt-5"
        >
          List Item
        </label>

        <label class="block mt-5">
          <span class="sr-only">Tambah File +</span>
          <input
            ref="file"
            type="file"
            accept=".xlsx, .xls"
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
            @change="onFileChange"
          />
        </label>
      </form>
    </template>

    <template v-if="conditionDetailVerifikasi.formRequestItem">
      <HRCenter>
        <template #title>Detail Barang yang diminta </template>
      </HRCenter>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700">Merk Item</span>
        <input
          v-model="formRequestDetail.item_brand"
          type="text"
          placeholder="Merk item yang diminta"
          class="input-form"
        />
      </label>
      <TextError
        v-if="messageError.item_brand"
        :text-error="messageError.item_brand"
      />

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Barang yang diminta</span
        >
        <input
          v-model="formRequestDetail.item_name"
          type="text"
          placeholder="Masukkan barang yang diminta"
          class="input-form"
        />
      </label>
      <TextError
        v-if="messageError.item_name"
        :text-error="messageError.item_name"
      />

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >No Barang Inventaris</span
        >
        <input
          v-model="formRequestDetail.item_number"
          type="text"
          placeholder="Masukkan no barang inventaris"
          class="input-form"
        />
      </label>
      <TextError
        v-if="messageError.item_number"
        :text-error="messageError.item_number"
      />
    </template>

    <label v-if="conditionDetailVerifikasi.formCheckItem" class="block mt-5">
      <HRCenter>
        <template #title>Catatan Kondisi Barang</template>
      </HRCenter>
      <span class="block text-sm font-bold text-slate-700">
        Catatan Kondisi Barang
      </span>
      <textarea
        v-model="formUpdateStatus.notes"
        placeholder="Masukkan Catatan Kondisi Barang"
        rows="6"
        class="input-form"
      ></textarea>
      <TextError v-if="messageError.notes" :text-error="messageError.notes" />
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
        Catatan Kondisi Pengembalian Barang
      </span>
      <textarea
        placeholder="Masukkan Catatan Kondisi Pengembalian Barang"
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
  </div>
</template>
