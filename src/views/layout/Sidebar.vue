<script>
import SvgIcon from "../../components/layouts/SvgIcon.vue";
export default {
  components: { SvgIcon },
  props: { showSidebar: Boolean },
  data() {
    return {
      menuSidebar: [
        {
          routerLinkName: "list-request",
          icon: {
            folder: "icons",
            name: "book.svg",
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
        <SvgIcon
          v-if="showSidebar"
          :height="'2.5rem'"
          :name="'logo-inventaris.svg'"
          :folder="'img'"
          mode="image"
        />

        <SvgIcon
          v-else
          :height="'2.5rem'"
          :name="'logo-mini-inventaris.svg'"
          :folder="'img'"
          mode="image"
        />
      </a>

      <nav v-for="(menu, index) in menuSidebar" :key="index">
        <router-link
          :to="{ name: menu.routerLinkName }"
          class="group flex items-center py-3 px-4 space-x-2 mt-2 hover:bg-blue-100 rounded-xl transition duration-500 ease-in-out"
        >
          <SvgIcon
            :name="menu.icon.name"
            :folder="menu.icon.folder"
            :fill-color="'#0D47A1'"
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
