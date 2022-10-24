<script>
export default {
  props: { textError: { type: String, default: "" } },
};
</script>

<template>
  <p class="text-red-700 text-sm">{{ textError }}</p>
</template>
