<script>
import IconSvg from "../../components/layouts/IconSvg.vue";
export default {
  components: {
    IconSvg,
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
          class="text-2xl md:text-3xl text-blue-gray-700 font-bold leading-[68px] text-center md:mb-10"
        >
          Selamat datang di
        </h1>

        <div class="flex justify-center m-auto">
          <IconSvg
            icon="/logo/logo-inventaris.svg"
            :width="450"
            :height="100"
            mode="image"
          />
        </div>

        <div class="flex justify-center mt-5 xl:mt-0">
          <button
            class="bg-blue-gray-700 hover:bg-blue-gray-400 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-center inline-flex item-center md:mt-10"
            type="button"
            @click="login"
          >
            <IconSvg
              icon="/icons/key.svg"
              fill-color="white"
              class="!mr-2 !w-5 !h-5 !m-auto"
            />

            Masuk dengan SSO
          </button>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <IconSvg
          icon="/logo/diskominfo.png"
          mode="image"
          class="!h-[40px] !w-[90px] md:!w-[170px] md:!h-[50px] !m-auto md:!m-0"
        />

        <IconSvg
          icon="/logo/jds-logo.svg"
          mode="image"
          class="!h-[40px] !w-[90px] md:!w-[170px] md:!h-[50px] !m-auto md:!m-0"
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
