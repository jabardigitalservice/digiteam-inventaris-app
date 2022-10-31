<script>
import Sidebar from "./Sidebar.vue";
import ProfileMenu from "./ProfileMenu.vue";
import SvgIcon from "../../components/layouts/SvgIcon.vue";
import IconSvg from "../../components/layouts/IconSvg.js";

export default {
  components: { Sidebar, ProfileMenu, SvgIcon, IconSvg },
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
            <!-- <LoadSvg name="burger-button" folder="icons" class="w-7 h-7" /> -->
            <IconSvg :name="'arrow-right.svg'" :folder="'svg-icons'" />

            <SvgIcon
              :icon="'arrow-right.svg'"
              :folder="'svg-icons'"
              :size="16"
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
