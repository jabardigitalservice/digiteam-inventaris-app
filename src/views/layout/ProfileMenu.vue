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
      class="inline-flex items-center rounded-lg bg-white text-center text-sm font-medium focus:outline-none"
      :class="show ? 'font-bold text-blue-700' : 'text-gray-800'"
      @click="show = !show"
    >
      <span class="mr-3"> {{ $store.state.user.profile.name }}</span>

      <IconSvg
        icon="/icons/arrow.svg"
        class="!h-5 !w-5"
        :class="show ? 'rotate-90 !bg-blue-700' : '!bg-gray-800'"
      />
    </button>

    <div
      v-show="show"
      class="absolute right-0 w-40 rounded-md bg-white p-2 shadow-xl"
    >
      <button
        class="group inline-flex w-full items-center p-1 text-sm hover:rounded-md hover:bg-blue-50"
        @click="logout"
      >
        <IconSvg
          class="mx-3 !bg-gray-800 group-hover:!bg-blue-700"
          icon="/icons/Logout.svg"
        />

        <span
          class="text-gray-800 group-hover:font-bold group-hover:text-blue-700"
          >Keluar</span
        >
      </button>
    </div>
  </div>
</template>
