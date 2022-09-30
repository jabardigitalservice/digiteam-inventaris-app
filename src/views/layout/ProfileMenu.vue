<script>
export default {
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
      :class="show ? 'text-blue-900' : 'text-[#788896]'"
      @click="show = !show"
    >
      <img
        class="rounded-full border border-gray-100 shadow-sm w-8 h-8 mr-2"
        src="https://randomuser.me/api/portraits/women/81.jpg"
        alt="user image"
      />

      <span class="mr-4 font-bold">User name</span>
      <svg
        class="w-5 h-5 text-[#788896]"
        :class="show ? 'text-blue-900 -rotate-90' : 'text-[#788896]'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
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
