<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      required: true,
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
