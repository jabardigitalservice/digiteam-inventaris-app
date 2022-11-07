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
      selectValue: {
        request_type: "",
        division: "",
        status: "",
      },
    };
  },
  methods: {
    open(name) {
      this.$store.dispatch("modals/open", name);
    },
    getSelectFilter() {
      this.$emit("get-select-filter", this.selectValue);
    },
  },
};
</script>

<template>
  <div class="grid grid-rows-1 md:grid-cols-5 gap-6 mb-5">
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900">
        &nbsp;
      </label>
      <button
        class="inline-flex text-green-700 font-bold hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 text-center w-full"
        type="button"
        @click="open('add-request')"
      >
        <LoadSvg name="plus" folder="icons" class="w-4 h-4 mr-2" />
        <span>Tambah Permohonan</span>
      </button>
    </div>

    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900">
        Jenis Permohonan:
      </label>
      <select
        v-model="selectValue.request_type"
        class="select-filter-table"
        @change="getSelectFilter()"
      >
        <option value="">All</option>
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
      <label class="block mb-2 text-sm font-medium text-gray-900">
        Unit / Divisi:
      </label>
      <select
        v-model="selectValue.division"
        class="select-filter-table"
        @change="getSelectFilter()"
      >
        <option value="">All</option>
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
      <label class="block mb-2 text-sm font-medium text-gray-900">
        Status:
      </label>
      <select
        v-model="selectValue.status"
        class="select-filter-table"
        @change="getSelectFilter()"
      >
        <option value="">All</option>
        <option
          v-for="(status, index) in statusObject"
          :key="index"
          :value="status.value"
        >
          {{ status.text }}
        </option>
      </select>
    </div>

    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900">
        Search :
      </label>
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Cari Data</label>
        <div class="relative w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <!-- TODO: add icon search -->
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
  </div>
</template>
