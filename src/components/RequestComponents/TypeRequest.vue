<script>
import { typeRequestObjectOption } from "@/constants";
export default {
  props: { requestType: Number },
  methods: {
    getTypeLabel(requestType) {
      return requestType === typeRequestObjectOption.BARU.value
        ? typeRequestObjectOption.BARU.text
        : typeRequestObjectOption.TUKAR.text;
    },
    getColorLabel(requestType) {
      return requestType === typeRequestObjectOption.BARU.value
        ? "bg-green-100 text-green-800 border border-green-700"
        : "bg-yellow-100 text-yellow-800 border-yellow-700";
    },
  },
};
</script>

<template>
  <span
    :class="getColorLabel(requestType)"
    class="font-semibold mr-2 px-2.5 py-0.5 rounded-md"
  >
    {{ getTypeLabel(requestType) }}
  </span>
</template>
