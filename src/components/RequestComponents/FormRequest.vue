<script>
import TextError from "../layouts/TextError.vue";
import Modal from "../layouts/Modal.vue";
import { doPostUpdate } from "@/api";
import { sendFile } from "@/utils/inputFile.js";
import {
  divisiArrayOption,
  priortyObjectOption,
  typeRequestObjectOption,
} from "@/constants";
export default {
  name: "FormRequest",
  components: { TextError, Modal },
  data() {
    return {
      titleModal: "Form Pengajuan Permohonan Inventaris",
      isEvidence: false,
      formRequest: {
        request_type: "",
        division: "",
        requested_item: "",
        purpose: "",
        priority: "",
        phone_number: "",
        replacement_evidence: "",
      },
      formRequestCopy: {},
      messageError: {},
      messageErrorCopy: {},
      divisiArrayOption,
      priortyObjectOption,
      typeRequestObjectOption,
    };
  },
  watch: {
    "formRequest.request_type"(val) {
      if (val == 2) {
        this.isEvidence = true;
      } else {
        this.isEvidence = false;
        this.formRequest.replacement_evidence = "";
      }
    },
  },
  mounted() {
    this.formRequestCopy = { ...this.formRequest };
    this.messageErrorCopy = { ...this.messageError };
  },
  methods: {
    resetFormRequest() {
      this.formRequest = { ...this.formRequestCopy };
      this.messageError = { ...this.messageErrorCopy };
    },
    handleSubmit() {
      this.$Swal
        .fire({
          title: "Ingin mengirim permohonan?",
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
            const checkFile = this.checkFile();
            if (checkFile) {
              const response = doPostUpdate(
                "/requests",
                "POST",
                this.formRequest
              );
              response
                .then(() => {
                  this.$store
                    .dispatch("sweetalert/successAlert", {
                      title: "Success",
                      text: "Berhasil mengirim permohonan",
                    })
                    .then(() => {
                      this.$store.dispatch("modals/close", this.name);
                      this.resetFormRequest();
                      this.$emit("get-response-form");
                    });
                })
                .catch((err) => {
                  this.messageError = err.response.data.errors;
                  if (err.response.data.errors) {
                    this.$store.dispatch("sweetalert/errorAlert", {
                      title: "Data kurang lengkap!",
                      text: "Gagal mengirim permohonan",
                    });
                  } else {
                    this.$store.dispatch("sweetalert/errorAlert", {
                      title: "Server Error!",
                      text: "Gagal mengirim permohonan",
                    });
                  }
                });
            } else {
              this.$store.dispatch("sweetalert/errorAlert", {
                title: "Data kurang lengkap!",
                text: "Untuk penukaran barang harus melampirkan file Evidence!",
              });
            }
          }
        });
    },
    onFileChange(typeFile) {
      if (this.$refs.file.files[0]) {
        const response = sendFile(this.$refs.file.files[0], typeFile);
        response.then((result) => {
          if (result) {
            this.formRequest.replacement_evidence = result;
            this.$store.dispatch("sweetalert/stopLoadingAlert");
          } else {
            this.$refs.file.value = null;
          }
        });
      }
    },
    checkFile() {
      if (this.formRequest.request_type === 2) {
        return !!this.formRequest.replacement_evidence;
      } else {
        return true;
      }
    },
    async onSubmit() {
      const isValid = await this.$refs.form.validate();
      console.log(isValid);
      console.log(this.file);
    },
  },
};
</script>

<template>
  <Modal name="add-request">
    <template #header>
      {{ titleModal }}
    </template>
    <template #body>
      <ValidationObserver ref="form">
        <form @submit.prevent="onSubmit">
          <ValidationProvider
            v-slot="{ errors }"
            name="Jenis Permohonan"
            rules="required"
          >
            <label
              for="request_type"
              class="block mb-2 text-sm font-bold text-slate-700"
            >
              Jenis Permohonan
            </label>
            <select
              id="request_type"
              v-model.number="formRequest.request_type"
              class="select-form"
            >
              <option selected value="" disabled hidden>
                Pilih Jenis Permohonan
              </option>
              <option
                v-for="(typeRequest, index) in typeRequestObjectOption"
                :key="index"
                :value="typeRequest.value"
              >
                {{ typeRequest.text }}
              </option>
            </select>

            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <!-- <TextError
            v-if="messageError.request_type"
            :text-error="messageError.request_type"
          /> -->

          <ValidationProvider
            v-slot="{ errors }"
            name="Nama Pegawai"
            rules="required"
          >
            <label class="block mt-5">
              <span class="block text-sm font-bold text-slate-700"
                >Nama Pegawai</span
              >
              <input
                v-model="$store.state.user.profile.name"
                readonly
                type="text"
                placeholder="Nama Pegawai"
                class="input-form bg-gray-300"
              />
            </label>

            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors }"
            name="No Telepon"
            rules="required"
          >
            <label class="block mt-5">
              <span class="block text-sm font-bold text-slate-700"
                >No Telepon</span
              >
              <input
                v-model="formRequest.phone_number"
                type="text"
                placeholder="No Telepon"
                class="input-form"
              />
            </label>

            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <!-- <TextError
            v-if="messageError.phone_number"
            :text-error="messageError.phone_number"
          /> -->

          <ValidationProvider v-slot="{ errors }" name="Divisi">
            <label
              for="divisi"
              class="block mb-2 text-sm font-bold text-slate-700 mt-5"
            >
              Unit / Divisi
            </label>
            <select
              id="divisi"
              v-model="formRequest.division"
              class="select-form"
            >
              <option selected value="" disabled hidden>
                Pilih Team Unit / Divisi
              </option>

              <option
                v-for="(divisi, index) in divisiArrayOption"
                :key="index"
                :value="divisi"
              >
                {{ divisi }}
              </option>
            </select>

            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <!-- <TextError
            v-if="messageError.division"
            :text-error="messageError.division"
          /> -->

          <ValidationProvider v-slot="{ errors }" name="Barang yang diajukan">
            <label class="block mt-5">
              <span class="block text-sm font-bold text-slate-700">
                Barang yang diajukan
              </span>
              <input
                v-model="formRequest.requested_item"
                type="text"
                placeholder="Masukkan barang yang diajukan"
                class="input-form"
              />
            </label>

            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <!-- <TextError
            v-if="messageError.requested_item"
            :text-error="messageError.requested_item"
          /> -->

          <ValidationProvider v-slot="{ errors }" name="Alasan Pengajuan">
            <label class="block mt-5">
              <span class="block text-sm font-bold text-slate-700">
                Alasan Pengajuan
              </span>
              <textarea
                v-model="formRequest.purpose"
                placeholder="Masukkan alasan pengajuan"
                class="input-form"
              ></textarea>
            </label>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <!-- <TextError
            v-if="messageError.purpose"
            :text-error="messageError.purpose"
          /> -->

          <ValidationProvider v-slot="{ errors }" name="Tingkat Kebutuhan">
            <label
              for="priorty"
              class="block mb-2 text-sm font-bold text-slate-700 mt-5"
            >
              Tingkat Kebutuhan
            </label>
            <select
              id="priorty"
              v-model.number="formRequest.priority"
              class="select-form"
            >
              <option value="" selected disabled hidden>
                Tingkat Kebutuhan
              </option>
              <option
                v-for="(priorty, index) in priortyObjectOption"
                :key="index"
                :value="priorty.value"
              >
                {{ priorty.text }}
              </option>
            </select>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <!-- <TextError
            v-if="messageError.priority"
            :text-error="messageError.priority"
          /> -->

          <ValidationProvider v-slot="{ errors }" name="Evidence">
            <label
              v-if="isEvidence"
              for="evidence"
              class="block mb-2 text-sm font-bold text-slate-700 mt-5"
            >
              Evidence
            </label>

            <label v-if="isEvidence" class="block mt-5">
              <span class="sr-only">Tambah File +</span>
              <input
                ref="file"
                type="file"
                accept="image/png, image/jpeg"
                class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-800 file:text-white hover:file:bg-blue-300"
                @change="onFileChange('image')"
              />
              <p class="mt-1 text-xs text-gray-500">.png, .jpeg (MAX. 1MB)</p>
            </label>

            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <button
            class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </ValidationObserver>
    </template>
    <!-- <template #footer>
      <button
        class="text-blue-800 bg-transparent border border-solid border-blue-800 hover:bg-blue-800 hover:text-white active:bg-blue-900 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        @click="handleSubmit"
      >
        Ajukan Permohonan
      </button>
    </template> -->
  </Modal>
</template>
