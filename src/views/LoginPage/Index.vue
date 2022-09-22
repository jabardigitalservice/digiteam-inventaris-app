<script>
export default {
  data() {
    return {
      urlSso: import.meta.env.VITE_URL_SSO,
    };
  },
  methods: {
    loginSSO() {
      window.location.href = this.urlSso;
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="text-left md:text-center">
      <h1 class="font-bold text-2xl md:text-5xl">
        Selamat Datang di
        <span class="text-blue-gray-500">Inventaris Apps</span>
      </h1>
      <p class="mt-1 md:mt-2 font-normal text-sm md:text-2xl">
        Jabar Digital Service
      </p>
    </div>
    <div>
      <img
        src="@/assets/logo-jds.png"
        class="w-25 h-full m-auto"
        alt="Logo Jabar Digital Service"
      />
    </div>

    <div class="md:flex md:items-center md:justify-center">
      <button
        class="mt-10 md:mt-0 mb-10 bg-blue-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center w-full md:w-1/2"
        type="button"
        @click="loginSSO"
      >
        Masuk dengan SSO
      </button>
    </div>
  </div>
</template>
