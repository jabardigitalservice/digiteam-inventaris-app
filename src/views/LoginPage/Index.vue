<script>
import SvgIcon from "../../components/layouts/SvgIcon.vue";
export default {
  components: {
    SvgIcon,
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
    <div class="grid grid-cols-1 xl:grid-cols-2 m-auto">
      <div class="xl:col-start-2">
        <div
          class="w-[320px] h-[300px] p-8 xl:w-[600px] xl:h-[360px] md:w-[500px] md:h-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg shadow-gray-500/50"
        >
          <h1
            class="text-2xl md:text-3xl xl:invisible text-blue-gray-700 font-bold leading-[68px] text-center xl:hidden"
          >
            Selamat datang di
          </h1>

          <div class="m-10">
            <SvgIcon
              :icon="'logo-inventaris.svg'"
              :folder="'svg-logo'"
              mode="image"
            />
          </div>

          <div class="flex justify-center mt-5 xl:mt-0">
            <button
              class="bg-blue-gray-700 hover:bg-blue-gray-400 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-center inline-flex item-center"
              type="button"
              @click="login"
            >
              <SvgIcon
                :icon="'key.svg'"
                :folder="'svg-icons'"
                :fill-color="'#E8EBF0'"
                class="mr-2 m-auto"
              />

              Masuk dengan SSO
            </button>
          </div>
        </div>
      </div>

      <div class="xl:col-start-1 xl:row-start-1 xl:p-5">
        <div class="xl:mb-20 hidden xl:block">
          <h1
            class="invisible text-5xl xl:visible text-blue-gray-700 font-bold leading-[68px]"
          >
            Selamat datang di
          </h1>
          <h1
            class="invisible text-5xl xl:visible text-blue-gray-700 font-bold leading-[68px]"
          >
            DIGITEAM INVENTARIS
          </h1>
        </div>
        <div class="mt-10">
          <SvgIcon :icon="'logo-jds.svg'" :folder="'svg-logo'" mode="image" />
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
