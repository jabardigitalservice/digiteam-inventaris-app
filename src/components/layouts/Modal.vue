<script>
export default {
  props: {
    name: { type: String, default: "" },
  },
  computed: {
    isOpen() {
      return this.$store.getters["modals/allOpen"].includes(this.name);
    },
  },
  beforeDestroy() {
    if (this.isOpen) {
      this.close();
    }
  },
  methods: {
    close() {
      this.$store.dispatch("modals/close", this.name);
    },
  },
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 w-full max-h-full bg-gray-500 bg-opacity-75"
  >
    <div class="relative mx-auto w-full h-full p-8 max-h-full max-w-2xl">
      <div
        class="flex flex-col overflow-hidden bg-white rounded w-full max-h-full"
      >
        <div class="flex items-center justify-between p-4 border-b">
          <h5 class="text-xl font-semibold text-blue-gray-800 capitalize">
            <slot name="header"> </slot>
          </h5>
          <button
            class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            @click="close"
          >
            <span
              class="text-black h-6 w-6 text-xl block outline-none focus:outline-none"
            >
              x
            </span>
          </button>
        </div>

        <div class="relative overflow-y-auto p-4">
          <div class="space-y-4">
            <slot name="body" />
          </div>
        </div>

        <div
          class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
        >
          <button
            class="text-red-800 border border-solid border-red-800 hover:bg-red-800 hover:text-white active:bg-red-900 font-bold capitalize text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            @click="close"
          >
            Batal
          </button>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
