<script>
import LoadSvg from "../../components/layouts/LoadSvg.vue";
export default {
  components: { LoadSvg },
  props: { showSidebar: Boolean },
  data() {
    return {
      menuSidebar: [
        {
          routerLinkName: "list-request",
          icon: {
            folder: "icons",
            name: "book",
          },
          nameRouter: "Permohonan",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="flex">
    <div
      class="bg-white text-[#788896] font-semibold absolute -translate-x-full tablet:-translate-x-0 space-y-6 px-2 py-4 inset-y-0 left-0 tablet:h-screen p-5 pt-5 tablet:relative duration-200 ease-in-out"
      :class="showSidebar ? 'w-60 relative -translate-x-0' : 'w-24'"
    >
      <a href="" class="flex items-center px-4 space-x-2">
        <img
          v-if="showSidebar"
          src="@/assets/img/logo-inventaris.png"
          class="w-84 h-10"
          alt="Logo Inventaris"
        />
        <img
          v-else
          src="@/assets/img/logo-mini-inventaris.png"
          class="w-84 h-10"
          alt="Logo Inventaris"
        />
      </a>

      <nav v-for="(menu, index) in menuSidebar" :key="index">
        <router-link
          :to="{ name: menu.routerLinkName }"
          class="group flex items-center py-3 px-4 space-x-2 mt-2 hover:bg-blue-100 rounded-xl transition duration-500 ease-in-out"
        >
          <LoadSvg
            :name="menu.icon.name"
            :folder="menu.icon.folder"
            class="w-6 h-6"
          />
          <span
            class="text-[#788896] flex-1 duration-500 ease-in-out"
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
</style>
