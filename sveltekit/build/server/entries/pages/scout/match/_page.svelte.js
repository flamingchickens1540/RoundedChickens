import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
const CatlystCarousel_svelte_svelte_type_style_lang = "";
const css = {
  code: "#carousel.svelte-f9sk4u{display:flex;flex-direction:row}#carouselFrame.svelte-f9sk4u{overflow:hidden;transition-property:margin;transition-timing-function:ease-in-out}",
  map: null
};
const CatlystCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  let { speed = 2 } = $$props;
  let { snapSeconds = 0.2 } = $$props;
  let { shouldSnap = true } = $$props;
  let content;
  let margin = 0;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.snapSeconds === void 0 && $$bindings.snapSeconds && snapSeconds !== void 0)
    $$bindings.snapSeconds(snapSeconds);
  if ($$props.shouldSnap === void 0 && $$bindings.shouldSnap && shouldSnap !== void 0)
    $$bindings.shouldSnap(shouldSnap);
  $$result.css.add(css);
  return `   <div id="carouselFrame"${add_attribute("style", style, 0)} class="svelte-f9sk4u">  <div id="carousel" style="${"transition-duration:" + escape(0, true) + "s; margin-left:" + escape(margin, true) + "px;"}" class="svelte-f9sk4u"${add_attribute("this", content, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const SingleChoice_svelte_svelte_type_style_lang = "";
const SingleChoices_svelte_svelte_type_style_lang = "";
const MultipleChoice_svelte_svelte_type_style_lang = "";
const MultipleChoices_svelte_svelte_type_style_lang = "";
const Star_svelte_svelte_type_style_lang = "";
const Switch_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-izs07b">Match Scout</h1> ${validate_component(CatlystCarousel, "CatlystCarousel").$$render(
    $$result,
    {
      style: "height:200px",
      speed: 2,
      snapSeconds: 0.2,
      shouldSnap: true
    },
    {},
    {
      default: () => {
        return `<div data-svelte-h="svelte-ho8y15">test 1</div> <div data-svelte-h="svelte-fkms5u">test 2</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
