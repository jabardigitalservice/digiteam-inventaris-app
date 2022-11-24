<script>
import Sidebar from "./Sidebar.vue";
import NavbarMenu from "./NavbarMenu.vue";

export default {
  components: { Sidebar, NavbarMenu },
  data() {
    return {
      showSideBarValue: false,
    };
  },
  methods: {
    showSideBar() {
      this.showSideBarValue = !this.showSideBarValue;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="flex">
      <Sidebar :show-sidebar="showSideBarValue"></Sidebar>
      <div class="h-full w-full">
        <NavbarMenu @get-response-toggle-sidebar="showSideBar" />

        <div class="p-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
