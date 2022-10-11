<script>
export default {
  props: { textError: String },
};
</script>

<template>
  <p class="text-red-700 text-sm">{{ textError }}</p>
</template>
