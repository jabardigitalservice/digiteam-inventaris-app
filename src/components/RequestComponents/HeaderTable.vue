<script>
import LoadSvg from "../../components/layouts/LoadSvg.vue";
import {
  divisiArrayOption,
  typeRequestObjectOption,
  statusObject,
  typeItemObjectOption,
} from "@/constants";
export default {
  components: {
    LoadSvg,
  },
  data() {
    return {
      divisiArrayOption,
      typeRequestObjectOption,
      statusObject,
      typeItemObjectOption,
    };
  },
  methods: {
    open(name) {
      this.$store.dispatch("modals/open", name);
    },
  },
};
</script>

<template>
  <div class="grid grid-rows-1 md:grid-cols-5 gap-6 mb-5">
    <div>
      <button
        class="inline-flex text-blue-700 font-bold hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center w-full"
        type="button"
        @click="open('add-request')"
      >
        <LoadSvg name="plus" folder="icons" class="w-4 h-4 mr-2" />
        <span>Tambah Permohonan</span>
      </button>
    </div>

    <div>
      <select class="select-filter-table">
        <option selected value="" hidden disabled>Jenis Permohonan</option>
        <option
          v-for="(typeRequest, index) in typeRequestObjectOption"
          :key="index"
          :value="typeRequest.value"
        >
          {{ typeRequest.text }}
        </option>
      </select>
    </div>

    <div>
      <select class="select-filter-table">
        <option selected value="" hidden disabled>Unit / Divisi</option>
        <option
          v-for="(divisi, index) in divisiArrayOption"
          :key="index"
          :value="divisi"
        >
          {{ divisi }}
        </option>
      </select>
    </div>

    <div>
      <select class="select-filter-table">
        <option selected value="" hidden disabled>Status</option>
        <option
          v-for="(status, index) in statusObject"
          :key="index"
          :value="status.text"
        >
          {{ status.text }}
        </option>
      </select>
    </div>

    <form class="flex items-center">
      <label for="simple-search" class="sr-only">Cari Data</label>
      <div class="relative w-full">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <!-- todo add icon search -->
        </div>
        <input
          id="simple-search"
          type="text"
          class="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Cari Data"
          required
        />
      </div>
    </form>
  </div>
</template>
