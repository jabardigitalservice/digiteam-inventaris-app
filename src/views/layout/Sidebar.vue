<script>
export default {
  components: {},
  props: { showSidebar: Boolean },
};
</script>

<template>
  <div
    class="bg-white text-[#788896] font-semibold w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out tablet:relative tablet:-translate-x-0"
    :class="{ 'relative -translate-x-0': showSidebar }"
  >
    <a href="" class="flex items-center px-4 space-x-2">
      <img
        src="@/assets/logo-inventaris.png"
        class="w-100 h-10"
        alt="Logo Jabar Digital Service"
    /></a>

    <nav>
      <router-link
        :to="{ name: 'list-request' }"
        class="group flex items-center py-3 px-4 space-x-2 mt-2 hover:bg-blue-100 rounded-xl transition duration-500"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
        <span class="text-[#788896]">Permohonan</span>
      </router-link>

      <router-link
        :to="{ name: 'add-request' }"
        class="group flex items-center py-3 px-4 space-x-2 mt-2 hover:bg-blue-100 rounded-xl transition duration-500"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
        <span class="text-[#788896]">Add Permohonan</span>
      </router-link>
    </nav>
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
