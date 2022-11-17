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
      class="bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      :class="show ? 'text-blue-700' : 'text-[#788896]'"
      @click="show = !show"
    >
      <span class="mr-4 font-bold"> {{ $store.state.user.profile.name }}</span>

      <IconSvg
        icon="/icons/arrow.svg"
        class="!w-!5 h-5"
        :class="show ? '!bg-[#1976D2] rotate-90' : '!text-[#788896]'"
      />
    </button>

    <div
      v-show="show"
      class="absolute right-0 py-2 bg-white rounded-md shadow-xl w-40"
    >
      <button
        class="w-full px-4 py-2 text-sm text-[#788896] hover:bg-blue-100"
        @click="logout"
      >
        Keluar
      </button>
    </div>
  </div>
</template>
