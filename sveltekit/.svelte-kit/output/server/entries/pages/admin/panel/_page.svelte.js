import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../../../chunks/ssr.js";
const Scroller_svelte_svelte_type_style_lang = "";
const css = {
  code: "svelte-scroller-outer.svelte-xdbafy{display:block;position:relative}svelte-scroller-background.svelte-xdbafy{display:block;position:relative;width:100%}svelte-scroller-foreground.svelte-xdbafy{display:block;position:relative;z-index:2}svelte-scroller-foreground.svelte-xdbafy::after{content:' ';display:block;clear:both}svelte-scroller-background-container.svelte-xdbafy{display:block;position:absolute;width:100%;max-width:100%;pointer-events:none;will-change:transform}",
  map: null
};
const handlers = [];
if (typeof window !== "undefined") {
  const run_all = () => handlers.forEach((fn) => fn());
  window.addEventListener("scroll", run_all);
  window.addEventListener("resize", run_all);
}
if (typeof IntersectionObserver !== "undefined") {
  const map = /* @__PURE__ */ new Map();
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const update = map.get(entry.target);
        const index = handlers.indexOf(update);
        if (entry.isIntersecting) {
          if (index === -1)
            handlers.push(update);
        } else {
          update();
          if (index !== -1)
            handlers.splice(index, 1);
        }
      });
    },
    {
      rootMargin: "400px 0px"
      // TODO why 400?
    }
  );
}
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let widthStyle;
  let { top = 0 } = $$props;
  let { bottom = 1 } = $$props;
  let { threshold = 0.5 } = $$props;
  let { query = "section" } = $$props;
  let { parallax = false } = $$props;
  let { index = 0 } = $$props;
  let { count = 0 } = $$props;
  let { offset = 0 } = $$props;
  let { progress = 0 } = $$props;
  let { visible = false } = $$props;
  let outer;
  let foreground;
  let background;
  let offset_top = 0;
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.parallax === void 0 && $$bindings.parallax && parallax !== void 0)
    $$bindings.parallax(parallax);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css);
  style = `
		position: ${"absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${1};
	`;
  widthStyle = "";
  return ` <svelte-scroller-outer class="svelte-xdbafy"${add_attribute("this", outer, 0)}><svelte-scroller-background-container class="background-container svelte-xdbafy" style="${escape(style, true) + escape(widthStyle, true)}"><svelte-scroller-background class="svelte-xdbafy"${add_attribute("this", background, 0)}>${slots.background ? slots.background({}) : ``}</svelte-scroller-background></svelte-scroller-background-container> <svelte-scroller-foreground class="svelte-xdbafy"${add_attribute("this", foreground, 0)}>${slots.foreground ? slots.foreground({}) : ``}</svelte-scroller-foreground> </svelte-scroller-outer>`;
});
const TeamMachLogged = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { team_match } = $$props;
  if ($$props.team_match === void 0 && $$bindings.team_match && team_match !== void 0)
    $$bindings.team_match(team_match);
  return `<div class="grid grid-cols-3 grid-rows-1 place-items-center p-2 outline rounded"><div>${escape(team_match.match_key)}</div> <div>${escape(team_match.team_key)}</div> ${team_match != null ? `<div class="grid place-items-center bg-green-500 rounded p-1" data-svelte-h="svelte-1xkpdzc">Complete</div>` : `<div class="grid place-items-center bg-red-500 rounded p-1" data-svelte-h="svelte-1hxqv48">Waiting</div>`}</div>`;
});
const TeamMatchBacklog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { team_match_backlog } = $$props;
  let index, offset, progress;
  if ($$props.team_match_backlog === void 0 && $$bindings.team_match_backlog && team_match_backlog !== void 0)
    $$bindings.team_match_backlog(team_match_backlog);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="grid grid-flow-row gap-5 outline rounded p-3 overflow-y-scroll" data-svelte-h="svelte-utcbgy"></div> ${validate_component(Scroller, "Scroller").$$render(
      $$result,
      {
        top: 0.2,
        bottom: 0.8,
        index,
        offset,
        progress
      },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        },
        offset: ($$value) => {
          offset = $$value;
          $$settled = false;
        },
        progress: ($$value) => {
          progress = $$value;
          $$settled = false;
        }
      },
      {
        foreground: () => {
          return `<div slot="foreground">${each(team_match_backlog, (team_match) => {
            return `${validate_component(TeamMachLogged, "TeamMachLogged").$$render($$result, { team_match }, {}, {})}`;
          })}</div>`;
        },
        background: () => {
          return `<div slot="background" data-svelte-h="svelte-7r4qvp"></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const QueuedTeamMatch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { match_key } = $$props;
  let { team_key } = $$props;
  let { scout_name } = $$props;
  if ($$props.match_key === void 0 && $$bindings.match_key && match_key !== void 0)
    $$bindings.match_key(match_key);
  if ($$props.team_key === void 0 && $$bindings.team_key && team_key !== void 0)
    $$bindings.team_key(team_key);
  if ($$props.scout_name === void 0 && $$bindings.scout_name && scout_name !== void 0)
    $$bindings.scout_name(scout_name);
  return `<div class="grid grid-rows-2 grid-cols-7 outline place-content-center rounded m-3 bg-slate-500"><div class="col-span-7 grid place-content-center">Key: ${escape(match_key)}</div>  <div class="grid place-content-center col-span-4">Team: ${escape(team_key)}</div> <div class="grid place-content-center col-span-2 rounded bg-purple-500 align-middle m-2">${escape(scout_name)}</div></div>`;
});
const QueuedTeamMatches = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { teamMatches } = $$props;
  if ($$props.teamMatches === void 0 && $$bindings.teamMatches && teamMatches !== void 0)
    $$bindings.teamMatches(teamMatches);
  return `<div class="grid grid-flow-row grid-cols-2 outline rounded bg-slate-600"><div class="grid place-content-center col-span-2" data-svelte-h="svelte-1tmlkoj">Queued Team Matches</div> ${each(teamMatches, (teamMatch) => {
    return `${validate_component(QueuedTeamMatch, "QueuedTeamMatch").$$render(
      $$result,
      {
        match_key: teamMatch.match_key,
        team_key: teamMatch.team_key,
        scout_name: teamMatch.scout_name
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const AdminRobots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { robots } = $$props;
  if ($$props.robots === void 0 && $$bindings.robots && robots !== void 0)
    $$bindings.robots(robots);
  return `<div class="grid grid-cols-2, grid-rows-2 rounded outline"><div class="grid grid-cols-1 grid-rows-4 content-center bg-red-500 bg-opacity-10 outline rounded m-3"><div class="grid place-content-center" data-svelte-h="svelte-1xdtqoc">Red Robots</div> <input class="outline m-2 rounded" type="text" name="" id="red1"${add_attribute("value", robots[0][0], 0)}> <input class="outline m-2 rounded" type="text" name="" id="red2"${add_attribute("value", robots[0][1], 0)}> <input class="outline m-2 rounded" type="text" name="" id="red3"${add_attribute("value", robots[0][2], 0)}></div> <div class="grid grid-cols-1 grid-rows-4 content-center bg-blue-500 bg-opacity-10 outline rounded m-3"><div class="grid place-content-center" data-svelte-h="svelte-1xn7oyv">Blue Robots</div> <input class="outline m-2 rounded" type="text" name="" id="blue1"${add_attribute("value", robots[1][0], 0)}> <input class="outline m-2 rounded" type="text" name="" id="blue2"${add_attribute("value", robots[1][1], 0)}> <input class="outline m-2 rounded" type="text" name="" id="blue3"${add_attribute("value", robots[1][2], 0)}></div> <div class="bg-slate-500 bg-opacity-10 col-span-2 outline rounded m-3" data-svelte-h="svelte-yd9j2w"><div class="grid place-content-center">Match Key</div></div></div>`;
});
const Matches_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teamMatches = [
    {
      team_key: "frc1425",
      match_key: "2023orbb_qm67",
      scout_name: "Crow",
      scout_id: "",
      data: null
    },
    {
      team_key: "frc1425",
      match_key: "2023orbb_qm67",
      scout_name: "Crow",
      scout_id: "",
      data: null
    },
    {
      team_key: "frc1425",
      match_key: "2023orbb_qm67",
      scout_name: "Crow",
      scout_id: "",
      data: null
    },
    {
      team_key: "frc1425",
      match_key: "2023orbb_qm67",
      scout_name: "Crow",
      scout_id: "",
      data: null
    },
    {
      team_key: "frc1425",
      match_key: "2023orbb_qm67",
      scout_name: "Crow",
      scout_id: "",
      data: null
    },
    {
      team_key: "frc1425",
      match_key: "2023orbb_qm67",
      scout_name: "Crow",
      scout_id: "",
      data: null
    }
  ];
  let robots = [[], []];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<h1 class="grid place-content-center text-3xl m-4" data-svelte-h="svelte-1i9dvi">Admin Panel</h1> <div class="grid grid-cols-2 grid-rows-2 gap-3 m-4">${validate_component(AdminRobots, "AdminRobots").$$render(
      $$result,
      { robots },
      {
        robots: ($$value) => {
          robots = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(QueuedTeamMatches, "QueuedTeamMatches").$$render($$result, { teamMatches }, {}, {})}  ${validate_component(TeamMatchBacklog, "TeamMatchBacklog").$$render($$result, { team_match_backlog: teamMatches }, {}, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
