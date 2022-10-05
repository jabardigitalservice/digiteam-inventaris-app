<script>
import Sidebar from "./Sidebar.vue";
import ProfileMenu from "./ProfileMenu.vue";

import LoadSvg from "../../components/layouts/LoadSvg.vue";

export default {
  components: { Sidebar, ProfileMenu, LoadSvg },
  data() {
    return {
      showSidebar: false,
    };
  },
};
</script>

<template>
  <div id="app">
    <div class="relative flex min-h-screen">
      <Sidebar :show-sidebar="showSidebar"></Sidebar>
      <div class="flex-1">
        <div
          class="flex flex-wrap justify-between items-center px-2 py-4 bg-white"
        >
          <button
            class="text-blue-900 font-extrabold"
            @click="showSidebar = !showSidebar"
          >
            <LoadSvg name="burger-button" folder="icons" class="w-7 h-7" />
          </button>

          <div class="float-right">
            <ProfileMenu></ProfileMenu>
          </div>
        </div>

        <div class="p-8">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
