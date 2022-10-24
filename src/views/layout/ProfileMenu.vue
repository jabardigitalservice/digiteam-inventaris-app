<script>
import SvgIcon from "../../components/layouts/SvgIcon.vue";
export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("clearToken");
    },
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

      <span class="mr-4 font-bold"> {{ $store.state.user.profile.name }}</span>
      <SvgIcon
        :name="'arrow-right.svg'"
        :folder="'icons'"
        :fill-color="show ? '#1976D2' : ' #788896'"
        class="w-5 h-5"
        :class="show ? ' rotate-90' : 'text-[#788896]'"
      />
    </button>

    <div
      v-show="show"
      class="absolute right-0 py-2 bg-white rounded-md shadow-xl w-40"
    >
      <button
        class="w-full px-4 py-2 text-sm text-[#788896] hover:bg-blue-100"
        @click="logout"
      >
        <span>Keluar</span>

        <SvgIcon
          :name="'arrow-right.svg'"
          :folder="'icons'"
          :fill-color="show ? '#1976D2' : ' #788896'"
          class="w-5 h-5"
          :class="show ? ' rotate-90' : 'text-[#788896]'"
        />
      </button>
    </div>
  </div>
</template>
