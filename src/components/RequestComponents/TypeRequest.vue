<script>
export default {
  props: { requestType: Number },
  methods: {
    getTypeLabel(requestType) {
      switch (requestType) {
        case 1:
          return "Baru";
        case 2:
          return "Tukar";
        default:
          return "-";
      }
    },
    getColorLabel(requestType) {
      switch (requestType) {
        case 1:
          return "bg-green-100 text-green-800 border border-green-700";
        case 2:
          return "bg-yellow-100 text-yellow-800 border-yellow-700";
        default:
          return "-";
      }
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
