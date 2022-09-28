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
            <img
              src="@/assets/logo-inventaris.png"
              class="w-25 h-full m-auto"
              alt="Logo Jabar Digital Service"
            />
          </div>

          <div class="flex justify-center mt-5 desktop:mt-0">
            <button
              class="bg-blue-gray-700 hover:bg-blue-gray-400 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-center inline-flex item-center"
              type="button"
              @click="loginSSO"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 w-4 h-4 m-auto"
              >
                <g clip-path="url(#clip0_638_71)">
                  <path
                    d="M13 4C13 4.26522 12.8946 4.51957 12.7071 4.70711C12.5196 4.89464 12.2652 5 12 5C11.7348 5 11.4804 4.89464 11.2929 4.70711C11.1054 4.51957 11 4.26522 11 4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289C12.8946 3.48043 13 3.73478 13 4Z"
                    fill="white"
                  />
                  <path
                    d="M10.5 0C7.424 0 5 2.424 5 5.5C5 5.897 5.04 6.296 5.122 6.675C5.18 6.945 5.114 7.179 4.98 7.313L0.44 11.853C0.300434 11.9924 0.189731 12.1579 0.114229 12.3402C0.038728 12.5224 -8.92564e-05 12.7177 1.54108e-07 12.915V14.5C1.54108e-07 14.8978 0.158035 15.2794 0.43934 15.5607C0.720645 15.842 1.10218 16 1.5 16H3.5C3.89782 16 4.27936 15.842 4.56066 15.5607C4.84196 15.2794 5 14.8978 5 14.5V14H6C6.26522 14 6.51957 13.8946 6.70711 13.7071C6.89464 13.5196 7 13.2652 7 13V12H8C8.26522 12 8.51957 11.8946 8.70711 11.7071C8.89464 11.5196 9 11.2652 9 11V10.82C9.493 10.954 10.007 11 10.5 11C13.576 11 16 8.576 16 5.5C16 2.424 13.576 0 10.5 0ZM6 5.5C6 2.976 7.976 1 10.5 1C13.024 1 15 2.976 15 5.5C15 8.024 13.024 10 10.5 10C9.84 10 9.227 9.905 8.724 9.653C8.64777 9.6148 8.56304 9.59673 8.47786 9.60051C8.39268 9.60428 8.30988 9.62978 8.23733 9.67457C8.16478 9.71936 8.10489 9.78197 8.06335 9.85643C8.02181 9.93089 8 10.0147 8 10.1V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12V13H5C4.73478 13 4.48043 13.1054 4.29289 13.2929C4.10536 13.4804 4 13.7348 4 14V14.5C4 14.6326 3.94732 14.7598 3.85355 14.8536C3.75979 14.9473 3.63261 15 3.5 15H1.5C1.36739 15 1.24022 14.9473 1.14645 14.8536C1.05268 14.7598 1 14.6326 1 14.5V12.914C1.00003 12.7816 1.05253 12.6547 1.146 12.561L5.687 8.02C6.119 7.588 6.209 6.976 6.099 6.464C6.03229 6.14703 5.99911 5.82392 6 5.5V5.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_638_71">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

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
          <img
            src="@/assets/logo-jds-2.png"
            class="w-25 h-full m-auto desktop:m-0"
            alt="Logo Jabar Digital Service"
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
