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
  <div class="flex h-screen w-full">
    <div class="m-auto grid grid-cols-1">
      <div
        class="h-[300px] w-[320px] rounded-2xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-500/50 md:h-[360px] md:w-[500px] xl:h-[360px] xl:w-[600px]"
      >
        <h1
          class="text-center text-2xl font-bold leading-[68px] text-blue-gray-700 md:mb-10 md:text-3xl"
        >
          Selamat datang di
        </h1>

        <div class="m-auto flex justify-center">
          <IconSvg
            icon="/logo/logo-inventaris.svg"
            :width="450"
            :height="100"
            mode="image"
          />
        </div>

        <div class="mt-5 flex justify-center xl:mt-0">
          <button
            class="focus:shadow-outline item-center inline-flex rounded-lg bg-blue-gray-700 py-2 px-4 text-center text-white hover:bg-blue-gray-400 focus:outline-none md:mt-10"
            type="button"
            @click="login"
          >
            <IconSvg
              icon="/icons/key.svg"
              fill-color="white"
              class="!m-auto !mr-2 !h-5 !w-5"
            />

            Masuk dengan SSO
          </button>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <IconSvg
          icon="/logo/diskominfo.png"
          mode="image"
          class="!m-auto !h-[40px] !w-[90px] md:!m-0 md:!h-[50px] md:!w-[170px]"
        />

        <IconSvg
          icon="/logo/jds-logo.svg"
          mode="image"
          class="!m-auto !h-[40px] !w-[90px] md:!m-0 md:!h-[50px] md:!w-[170px]"
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
