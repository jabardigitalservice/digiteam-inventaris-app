<script>
import LoadSvg from "../../components/layouts/LoadSvg.vue";
export default {
  components: {
    LoadSvg,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
<template>
  <div class="relative">
    <button
      class="bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      :class="show ? 'text-blue-700' : 'text-[#788896]'"
      @click="show = !show"
    >
      <img
        class="rounded-full border border-gray-100 shadow-sm w-8 h-8 mr-2"
        src="https://randomuser.me/api/portraits/women/81.jpg"
        alt="user image"
      />

      <span class="mr-4 font-bold">User name</span>

      <LoadSvg
        name="arrow-right"
        folder="icons"
        class="w-5 h-5 fill-[#788896]"
        :class="show ? 'fill-[#1976D2] rotate-90' : 'text-[#788896]'"
      />
    </button>

    <div
      v-show="show"
      class="absolute right-0 py-2 bg-white rounded-md shadow-xl w-40"
    >
      <router-link
        to="/"
        class="block px-4 py-2 text-sm text-[#788896] hover:bg-blue-100"
      >
        Keluar
      </router-link>
    </div>
  </div>
</template>
