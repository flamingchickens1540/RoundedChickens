import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const index$1 = "";
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{font-family:poppins, sans-serif}h1, h2, h3, h4, h5, h6{font-family:teko, sans-serif}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
