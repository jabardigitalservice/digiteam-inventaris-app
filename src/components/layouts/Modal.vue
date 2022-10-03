<script>
export default {
  props: { showModal: Boolean, titleModal: String },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<template>
  <div>
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 w-full h-full outline-none overflow-x-hidden overflow-y-auto focus:outline-none"
    >
      <div class="relative w-auto my-6 mx-auto max-w-2xl h-auto">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-2xl font-semibold text-blue-800">
              {{ titleModal }}
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="closeModal"
            >
              <span
                class="text-black h-6 w-6 text-xl block outline-none focus:outline-none"
              >
                x
              </span>
            </button>
          </div>

          <div class="relative p-6 flex-auto">
            <slot />
          </div>

          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              class="text-red-800 bg-transparent border border-solid border-red-800 hover:bg-red-800 hover:text-white active:bg-red-900 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="closeModal"
            >
              Batal
            </button>
            <button
              class="text-blue-800 bg-transparent border border-solid border-blue-800 hover:bg-blue-800 hover:text-white active:bg-blue-900 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              @click="toggleModal()"
            >
              Tambahkan
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>
