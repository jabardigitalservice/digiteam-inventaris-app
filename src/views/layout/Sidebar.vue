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
        },
      ],
    };
  },
};
</script>

<template>
  <div class="h-screen sticky top-0">
    <div
      class="bg-white text-gray-700 font-semibold absolute -translate-x-full md:-translate-x-0 space-y-6 px-2 py-4 inset-y-0 left-0 md:h-full p-5 pt-5 md:relative min-h-screen duration-200 ease-in-out"
      :class="showSidebar ? 'w-60 relative -translate-x-0' : 'w-24'"
    >
      <a href="" class="flex items-center px-4 space-x-2">
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
          class="group flex items-center py-3 px-4 space-x-2 mt-2 hover:bg-blue-100 rounded-xl transition duration-500 ease-in-out"
        >
          <IconSvg
            :icon="`/icons/${menu.icon}`"
            class="!w-6 !h-3.5 ml-2.5 !bg-gray-700 icon group-hover:!bg-blue-900"
          />
          <span
            class="text-gray-700 duration-500 ease-in-out group-hover:!text-blue-900 text-sm"
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
