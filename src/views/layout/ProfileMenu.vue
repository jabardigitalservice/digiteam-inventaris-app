<script>
import IconSvg from "../../components/layouts/IconSvg.vue";
export default {
  components: {
    IconSvg,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("clearToken");
    },
  },
};
</script>
<template>
  <div class="relative">
    <button
      class="bg-white focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center"
      :class="show ? 'text-blue-700 font-bold' : 'text-gray-800'"
      @click="show = !show"
    >
      <span class="mr-3"> {{ $store.state.user.profile.name }}</span>

      <IconSvg
        icon="/icons/arrow.svg"
        class="!w-5 !h-5"
        :class="show ? '!bg-blue-700 rotate-90' : '!bg-gray-800'"
      />
    </button>

    <div
      v-show="show"
      class="absolute right-0 py-2 bg-white rounded-md shadow-xl w-40"
    >
      <button
        class="w-full inline-flex items-center text-sm hover:bg-blue-50 group"
        @click="logout"
      >
        <IconSvg
          class="!bg-gray-800 group-hover:!bg-blue-700 ml-3 mr-3"
          icon="/icons/Logout.svg"
        />

        <span
          class="text-gray-800 group-hover:text-blue-700 group-hover:font-bold"
          >Keluar</span
        >
      </button>
    </div>
  </div>
</template>
