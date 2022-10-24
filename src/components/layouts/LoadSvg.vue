<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    folder: {
      type: String,
      default: "",
    },
  },

  computed: {
    dynamicComponent() {
      return defineAsyncComponent(() =>
        import(`../../assets/${this.folder}/${this.name}.vue`)
      );
    },
  },
};
</script>

<template>
  <component :is="dynamicComponent" />
</template>
