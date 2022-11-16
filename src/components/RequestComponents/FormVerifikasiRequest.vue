<script>
import { putRequest } from "@/api";
import { sendFile } from "@/utils/inputFile.js";
import StatusRequest from "./StatusRequest.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    StatusRequest,
    ValidationProvider,
    ValidationObserver,
  },
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
        status: 0,
        notes: "",
        pickup_signing: "",
        pickup_evidence: "",
        pickup_bast: "",
        filename: "",
      },
      fileImage: null,
      refsType: null,
    };
  },
  methods: {
    async submitFormVerifikasi(status) {
      const isValid = await this.$refs.form.validate();
      if (isValid) {
        this.formRequestDetail.status = status;
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
              const response = putRequest(
                "/requests",
                this.id,
                this.formRequestDetail
              );

              response
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
      }
    },
    resetForm() {
      this.$store.dispatch("modals/close", this.name);
      this.$emit("get-response-form-verifikasi");
    },
    async onFileChange(type, formatTypeFile) {
      let validEvidence = false;
      let validFileName = false;
      let validBAST = false;
      if (type === "evidence") {
        this.refsType = this.$refs.evidence;
        validEvidence = await this.$refs.providerEvidence.validate(event);
      } else if (type === "filename") {
        this.refsType = this.$refs.filename;
        validFileName = await this.$refs.provider.validate(event);
      } else {
        this.refsType = this.$refs.bast;
        validBAST = await this.$refs.providerBAST.validate(event);
      }

      if (
        this.refsType.files[0] &&
        (validFileName || validEvidence || validBAST)
      ) {
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

            this.$store.dispatch("sweetalert/stopLoadingAlert");
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
    <ValidationObserver ref="form">
      <form @submit.prevent="submitFormVerifikasi(type)">
        <template v-if="conditionDetailVerifikasi.formListItem">
          <ValidationProvider
            v-slot="{ errors }"
            ref="provider"
            rules="required|ext:xlsx,xls|size:2024"
            name=" List Item"
          >
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
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>
        </template>

        <template v-else-if="conditionDetailVerifikasi.formRequestItem">
          <ValidationProvider
            v-slot="{ errors }"
            name="Merk Item"
            rules="required"
          >
            <label class="block">
              <span class="block text-sm font-bold text-slate-700"
                >Merk Item</span
              >
              <input
                v-model="formRequestDetail.item_brand"
                type="text"
                placeholder="Merk item yang diminta"
                class="input-form"
              />
            </label>
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="Barang yang diminta"
            rules="required"
          >
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
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="No Barang Inventaris"
            rules="required"
          >
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
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>
        </template>

        <template v-else-if="conditionDetailVerifikasi.formCheckItem">
          <ValidationProvider
            v-slot="{ errors }"
            name="Catatan Kondisi Barang"
            rules="required"
          >
            <label class="block">
              <span class="block text-sm font-bold text-slate-700">
                Catatan Kondisi Barang
              </span>
              <textarea
                v-model="formRequestDetail.notes"
                placeholder="Masukkan Catatan Kondisi Barang"
                rows="6"
                class="input-form"
              ></textarea>
            </label>
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>
        </template>

        <template v-else-if="conditionDetailVerifikasi.formPickUpItem">
          <ValidationProvider
            v-slot="{ errors }"
            name="Penanda Tangan BAST Pengambilan"
            rules="required"
          >
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
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            ref="providerEvidence"
            rules="required|ext:png,jpg|size:1024"
            name=" Evidence Pengembalian"
          >
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
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            ref="providerBAST"
            rules="required|ext:pdf,docx|size:2024"
            name=" BAST Pengembalian"
          >
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
                accept=".docx, application/pdf"
                class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
                @change="onFileChange('bast', 'doc')"
              />
            </label>
            <p class="mt-1 text-xs text-gray-500">.docx, .pdf (MAX. 2MB)</p>
            <span class="text-red-700 text-sm">{{ errors[0] }}</span>
          </ValidationProvider>
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
            Status Permohonan akan diubah menjadi
            <StatusRequest :status="status + 1" /> </span
        ></template>
      </form>
    </ValidationObserver>
  </div>
</template>
