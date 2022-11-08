<script>
import { patchRequest } from "@/api";
import TextError from "../layouts/TextError.vue";
import { sendFile } from "@/utils/inputFile.js";
import StatusRequest from "./StatusRequest.vue";
export default {
  components: { TextError, StatusRequest },
  props: {
    conditionDetailVerifikasi: { type: Object, default: () => ({}) },
    id: { type: String, default: "" },
    status: { type: Number, default: 0 },
  },
  data() {
    return {
      formRequestDetail: {
        item_name: "",
        item_brand: "",
        item_number: "",
        status: 6,
        notes: "",
        pickup_signing: "",
        pickup_evidence: "",
        pickup_bast: "",
        filename: "",
      },
      messageError: {},
      response: "",
      fileImage: null,
      refsType: null,
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
                `/${type}`,
                this.id,
                this.formRequestDetail
              );
            } else if (type === "filename") {
              this.response = patchRequest(
                "/requests",
                "PATCH",
                `/${type}`,
                this.id,
                this.formRequestDetail
              );
            } else if (type === "pickup") {
              this.response = patchRequest(
                "/requests",
                "PATCH",
                `/${type}`,
                this.id,
                this.formRequestDetail
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
    onFileChange(type, formatTypeFile) {
      if (type === "evidence") {
        this.refsType = this.$refs.evidence;
      } else if (type === "filename") {
        this.refsType = this.$refs.filename;
      } else {
        this.refsType = this.$refs.bast;
      }

      if (this.refsType.files[0]) {
        const response = sendFile(this.refsType.files[0], formatTypeFile);
        response.then((result) => {
          if (result) {
            if (type === "evidence") {
              this.formRequestDetail.pickup_evidence = result;
            } else if (type === "filename") {
              this.formRequestDetail.filename = result;
            } else {
              this.formRequestDetail.pickup_bast = result;
            }
          } else {
            this.refsType.value = null;
          }
        });
      }
    },
  },
};
</script>
<template>
  <div>
    <template v-if="conditionDetailVerifikasi.formListItem">
      <form>
        <label
          for="filename"
          class="block mb-2 text-sm font-bold text-slate-700"
        >
          List Item
        </label>

        <label class="block mt-5">
          <span class="sr-only">Tambah File +</span>
          <input
            ref="filename"
            type="file"
            accept=".xlsx, .xls"
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
            @change="onFileChange('filename', 'xls')"
          />
        </label>
        <p class="mt-1 text-xs text-gray-500">.xlsx, .xls (MAX. 2MB)</p>
      </form>
    </template>

    <template v-else-if="conditionDetailVerifikasi.formRequestItem">
      <label class="block">
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

    <label v-else-if="conditionDetailVerifikasi.formCheckItem" class="block">
      <span class="block text-sm font-bold text-slate-700">
        Catatan Kondisi Barang
      </span>
      <textarea
        v-model="formRequestDetail.notes"
        placeholder="Masukkan Catatan Kondisi Barang"
        rows="6"
        class="input-form"
      ></textarea>
      <TextError v-if="messageError.notes" :text-error="messageError.notes" />
    </label>

    <template v-else-if="conditionDetailVerifikasi.formPickUpItem">
      <label class="block">
        <span class="block text-sm font-bold text-slate-700"
          >Penanda Tangan BAST Pengambilan</span
        >
        <input
          v-model="formRequestDetail.pickup_signing"
          type="text"
          placeholder="Masukkan Penanda Tangan BAST Pengambilan"
          class="input-form"
        />
      </label>
      <TextError
        v-if="messageError.pickup_signing"
        :text-error="messageError.pickup_signing"
      />

      <label
        for="evidence"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        Evidence Pengambilan
      </label>

      <label class="block mt-5">
        <span class="sr-only">Tambah File +</span>
        <input
          ref="evidence"
          type="file"
          accept="image/png, image/jpeg"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
          @change="onFileChange('evidence', 'image')"
        />
      </label>
      <p class="mt-1 text-xs text-gray-500">.png, .jpeg (MAX. 1MB)</p>
      <TextError
        v-if="messageError.pickup_evidence"
        :text-error="messageError.pickup_evidence"
      />

      <label
        for="evidence"
        class="block mb-2 text-sm font-bold text-slate-700 mt-5"
      >
        BAST Pengambilan
      </label>

      <label class="block mt-5">
        <span class="sr-only">Tambah File +</span>
        <input
          ref="bast"
          type="file"
          accept=".doc, .docx, application/pdf"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
          @change="onFileChange('bast', 'doc')"
        />
      </label>
      <p class="mt-1 text-xs text-gray-500">.docx, .doc, .pdf (MAX. 2MB)</p>
      <TextError
        v-if="messageError.pickup_bast"
        :text-error="messageError.pickup_bast"
      />
    </template>

    <template v-else-if="conditionDetailVerifikasi.formReturnItem">
      <label class="block">
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

    <template v-else>
      <span class="block text-sm font-bold text-slate-700 mt-5">
        Ubah Status Permohonan menjadi
        <StatusRequest :status="status + 1" /> </span
    ></template>
  </div>
</template>
