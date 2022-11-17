<script>
import Sidebar from "./Sidebar.vue";
import ProfileMenu from "./ProfileMenu.vue";

import IconSvg from "../../components/layouts/IconSvg.vue";

export default {
  components: { Sidebar, ProfileMenu, IconSvg },
  data() {
    return {
      showSidebar: false,
    };
  },
};
</script>

<template>
  <div id="app">
    <div class="flex">
      <Sidebar :show-sidebar="showSidebar"></Sidebar>
      <div class="h-full w-full">
        <div class="justify-between items-center px-2 py-5 bg-white">
          <button
            class="text-blue-900 font-extrabold"
            @click="showSidebar = !showSidebar"
          >
            <IconSvg
              icon="/icons/burger-button.svg"
              class="!w-!5 h-5"
              :class="showSidebar ? '!bg-[#0d47a1]' : '!bg-[#677887]'"
            />
          </button>

          <div class="float-right">
            <ProfileMenu></ProfileMenu>
          </div>
        </div>

        <div class="p-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
