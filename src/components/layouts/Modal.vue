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
  <div>
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 w-full max-h-full outline-none overflow-x-hidden overflow-y-auto focus:outline-none"
    >
      <div class="relative w-auto my-6 mx-auto max-w-2xl h-auto">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-2xl font-semibold text-blue-800">
              <slot name="header"> </slot>
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="close"
            >
              <span
                class="text-black h-6 w-6 text-xl block outline-none focus:outline-none"
              >
                x
              </span>
            </button>
          </div>

          <div class="relative p-6 flex-auto">
            <slot name="body" />
          </div>

          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              class="text-red-800 bg-transparent border border-solid border-red-800 hover:bg-red-800 hover:text-white active:bg-red-900 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    <div v-if="isOpen" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>
