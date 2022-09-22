<script>
import FormRequest from "../../components/RequestComponents/FormRequest.vue";
export default {
  components: {
    FormRequest,
  },
};
</script>

<template>
  <div>
    <div class="mb-5 md:text-center">
      <h1 class="font-bold text-xl md:text-5xl text-slate-70">
        Form Permohonan Inventaris
      </h1>
      <p
        class="mt-1 md:mt-2 font-normal text-sm md:text-2xl text-blue-gray-500"
      >
        Jabar Digital Service
      </p>
    </div>
    <div
      class="w-full p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <FormRequest />
    </div>
  </div>
</template>
