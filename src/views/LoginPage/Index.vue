<script>
import LoadSvg from "../../components/layouts/LoadSvg.vue";
export default {
  components: {
    LoadSvg,
  },
  mounted() {},
  methods: {
    login() {
      this.$keycloak.login({
        redirectUri: import.meta.env.VITE_STAGING_KEYCLOCK_REDIRECT_URI,
      });
    },
  },
};
</script>

<template>
  <div class="w-full flex h-screen">
    <div class="grid grid-cols-1 m-auto">
      <div
        class="w-[320px] h-[300px] p-8 xl:w-[600px] xl:h-[360px] md:w-[500px] md:h-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg shadow-gray-500/50"
      >
        <h1
          class="text-2xl md:text-3xl text-blue-gray-700 font-bold leading-[68px] text-center"
        >
          Selamat datang di
        </h1>

        <div class="m-10">
          <LoadSvg
            name="logo-inventaris"
            folder="logo"
            class="w-44 h-full m-auto md:w-96"
          />
        </div>

        <div class="flex justify-center mt-5 xl:mt-0">
          <button
            class="bg-blue-gray-700 hover:bg-blue-gray-400 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-center inline-flex item-center"
            type="button"
            @click="login"
          >
            <LoadSvg name="key" folder="icons" class="mr-2 w-4 h-4 m-auto" />

            Masuk dengan SSO
          </button>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <img
          src="@/assets/img/logo-diskom-jabar-inventaris.png"
          class="w-60 h-24 m-auto md:w-80 md:m-0"
          alt="Logo Pemprov Jabar"
        />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: #e3e7ed;
}
</style>
