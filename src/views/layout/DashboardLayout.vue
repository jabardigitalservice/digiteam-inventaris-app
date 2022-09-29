<script>
import Sidebar from "./Sidebar.vue";

export default {
  components: { Sidebar },
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
        <div class="bg-white shadow px-2 py-4">
          <button
            class="text-blue-900 font-extrabold"
            @click="showSidebar = !showSidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div class="p-8">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
