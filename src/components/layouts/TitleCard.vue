<script>
export default {
  props: {
    titleCard: { type: String, default: "" },
    textCard: { type: String, default: "" },
  },
};
</script>

<template>
  <div
    class="p-5 w-full bg-white rounded-lg border shadow-md mb-5 text-blue-gray-700"
  >
    <h5 class="mb-2 text-3xl font-bold">{{ titleCard }}</h5>
    <p class="mb-5 text-base">
      {{ textCard }}
    </p>
  </div>
</template>
