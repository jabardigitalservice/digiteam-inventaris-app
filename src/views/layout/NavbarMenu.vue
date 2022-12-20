<script>
import ProfileMenu from "./ProfileMenu.vue";

import IconSvg from "../../components/layouts/IconSvg.vue";

export default {
  components: { ProfileMenu, IconSvg },
  methods: {
    getResponseToggleSidebar() {
      this.$emit("get-response-toggle-sidebar");
    },
  },
};
</script>

<template>
  <div
    class="sticky top-0 z-50 items-center justify-between bg-white px-2 py-5"
  >
    <button
      class="font-extrabold text-blue-900"
      @click="getResponseToggleSidebar"
    >
      <IconSvg icon="/icons/burger-button.svg" class="!h-5 !w-5 !bg-gray-700" />
    </button>

    <div class="float-right">
      <ProfileMenu></ProfileMenu>
    </div>
  </div>
</template>
