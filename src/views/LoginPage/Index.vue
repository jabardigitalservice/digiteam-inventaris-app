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
    <div class="grid grid-cols-1 desktop:grid-cols-2 m-auto">
      <div class="desktop:col-start-2">
        <div
          class="w-[320px] h-[300px] p-8 desktop:w-[600px] desktop:h-[360px] tablet:w-[500px] tablet:h-[360px] bg-white rounded-2xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg shadow-gray-500/50"
        >
          <h1
            class="text-2xl tablet:text-3xl desktop:invisible text-blue-gray-700 font-bold leading-[68px] text-center desktop:hidden"
          >
            Selamat datang di
          </h1>

          <div class="m-10">
            <LoadSvg
              name="logo-inventaris"
              folder="logo"
              class="w-44 h-full m-auto tablet:w-96"
            />
          </div>

          <div class="flex justify-center mt-5 desktop:mt-0">
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
      </div>

      <div class="desktop:col-start-1 desktop:row-start-1 desktop:p-5">
        <div class="desktop:mb-20 hidden desktop:block">
          <h1
            class="invisible text-5xl desktop:visible text-blue-gray-700 font-bold leading-[68px]"
          >
            Selamat datang di
          </h1>
          <h1
            class="invisible text-5xl desktop:visible text-blue-gray-700 font-bold leading-[68px]"
          >
            DIGITEAM INVENTARIS
          </h1>
        </div>
        <div class="mt-10">
          <LoadSvg
            name="logo-jds"
            folder="logo"
            class="w-24 h-full m-auto tablet:w-36 tablet:m-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: #e3e7ed;
}
</style>
