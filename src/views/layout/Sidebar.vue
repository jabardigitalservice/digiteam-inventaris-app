<script>
import IconSvg from "../../components/layouts/IconSvg.vue";
export default {
  components: { IconSvg },
  props: { showSidebar: { type: Boolean, default: false } },
  data() {
    return {
      menuSidebar: [
        {
          routerLinkName: "list-request",
          icon: "book.svg",
          nameRouter: "Permohonan",
          label: "Daftar Permohonan",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="sticky top-0 h-screen">
    <div
      class="absolute inset-y-0 left-0 min-h-screen -translate-x-full space-y-6 bg-white p-5 px-2 py-4 pt-5 font-semibold text-gray-700 duration-200 ease-in-out md:relative md:h-full md:-translate-x-0"
      :class="showSidebar ? 'relative w-60 -translate-x-0' : 'w-24'"
    >
      <a
        href=""
        class="flex items-center space-x-2 px-4"
        aria-label="Daftar Permohonan"
      >
        <IconSvg
          v-if="showSidebar"
          icon="/logo/logo-inventaris.svg"
          :height="40"
          :width="176"
          mode="image"
        />

        <IconSvg
          v-else
          icon="/logo/logo-mini-inventaris.svg"
          :height="50"
          :width="46"
          mode="image"
        />
      </a>

      <nav v-for="(menu, index) in menuSidebar" :key="index">
        <router-link
          :to="{ name: menu.routerLinkName }"
          aria-label="Daftar Permohonan"
          class="group mt-2 flex items-center space-x-2 rounded-xl py-3 px-4 transition duration-500 ease-in-out hover:bg-blue-100"
        >
          <IconSvg
            :icon="`/icons/${menu.icon}`"
            class="icon ml-2.5 !h-3.5 !w-6 !bg-gray-700 group-hover:!bg-blue-900"
          />
          <span
            class="text-sm text-gray-700 duration-500 ease-in-out group-hover:!text-blue-900"
            :class="{ hidden: !showSidebar }"
            >{{ menu.nameRouter }}</span
          >
        </router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
a.router-link-active {
  color: #0d47a1;
  background-color: #bbdefb;
  font-weight: bold;
}

a.router-link-active span {
  color: #0d47a1;
  background-color: #bbdefb;
}

a.router-link-active .icon {
  background-color: #0d47a1 !important;
}
</style>
