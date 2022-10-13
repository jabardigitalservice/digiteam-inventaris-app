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
  <div class="mb-5">
    <button
      class="inline-flex text-blue-700 font-bold hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      type="button"
      @click="open('add-request')"
    >
      <LoadSvg name="plus" folder="icons" class="w-4 h-4 mr-2" />
      <span>Tambah Permohonan</span>
    </button>
  </div>
</template>
