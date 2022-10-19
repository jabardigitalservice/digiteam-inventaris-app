<script>
import LoadSvg from "../../components/layouts/LoadSvg.vue";
export default {
  components: {
    LoadSvg,
  },
  methods: {
    open(name) {
      this.$store.dispatch("modals/open", name);
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-6 gap-6 mb-5">
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
      <select
        class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected value="" hidden disabled>Jenis Permohonan</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>

    <div>
      <select
        class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected value="" hidden disabled>Unit / Divisi</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>

    <div>
      <select
        class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected value="" hidden disabled>Jenis Inventaris</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>

    <div>
      <select
        class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected value="" hidden disabled>Status</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  </div>
</template>
