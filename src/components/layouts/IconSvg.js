// import { h } from "vue";

// const IconSvg = (props, context) => {
//   const svg = require(`../assets/${props.name}.svg`).default;
//   return h("span", { ...context.attrs, class: "common-icon" }, [
//     h(svg, { style: "height: 500px; width: 500px" }, [h(svg)]),
//   ]);
// };

// IconSvg.props = {
//   name: {
//     type: String,
//     required: true,
//   },
//   width: {
//     type: String,
//     default: "",
//   },
//   height: {
//     type: String,
//     default: "",
//   },
//   size: {
//     type: String,
//     default: "",
//   },
// };

// export default IconSvg;

import { h } from "vue";

const IconSvg = (props, context) => {
  console.log(props.name);
  const svg = new URL(`../assets/${props.name}.svg`, import.meta.url).href;
  console.log(svg);
  return h("span", { ...context.attrs, class: "common-icon" }, [
    h(svg, { style: "height: 500px; width: 500px" }, [h(svg)]),
  ]);
};

IconSvg.props = {
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
};

export default IconSvg;
