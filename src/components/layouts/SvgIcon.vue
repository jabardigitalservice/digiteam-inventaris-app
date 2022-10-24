<script>
import { off } from "process";

export default {
  props: {
    folder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 16,
    },
    height: {
      type: String,
      default: "2.5rem",
    },
    width: {
      type: String,
      default: "10rem",
    },
    fillColor: {
      type: String,
      default: "#000",
    },
    mode: {
      type: String,
      default: "mask",
      validator(value) {
        // The value must match one of these strings
        return ["mask", "image"].includes(value);
      },
    },
  },
  computed: {
    dynamicComponent() {
      if (this.mode === "mask") {
        return {
          "background-color": this.fillColor,
          "mask-image": `url(${this.getImageUrl(this.icon)})`,
          "mask-size": "100% 100%",
          height: `${this.size}px`,
          width: `${this.size}px`,
        };
      } else {
        return {
          background: `url(${this.getImageUrl(
            this.icon
          )}) 0% 0% / 100% 100% no-repeat`,
          "background-size": "100% 100%",
          "background-color": "transparent",
          height: `${this.height}`,
          width: `${this.width}`,
        };
      }
    },
  },
  methods: {
    getImageUrl() {
      const imageUrl = new URL(
        `../../assets/${this.folder}/${this.name}`,
        import.meta.url
      ).href;
      console.log(imageUrl);
      return imageUrl;
    },
  },
};
</script>

<template>
  <span
    :style="dynamicComponent"
    aria-label="SVG Icon"
    aria-roledescription="SVG Icon"
  />
</template>
