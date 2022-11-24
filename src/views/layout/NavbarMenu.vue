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
    class="sticky top-0 z-50 justify-between items-center px-2 py-5 bg-white"
  >
    <button
      class="text-blue-900 font-extrabold"
      @click="getResponseToggleSidebar"
    >
      <IconSvg icon="/icons/burger-button.svg" class="!w-5 !h-5 !bg-gray-700" />
    </button>

    <div class="float-right">
      <ProfileMenu></ProfileMenu>
    </div>
  </div>
</template>
