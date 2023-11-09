

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/scout/image/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.dab925ea.js","_app/immutable/chunks/scheduler.682ccc96.js","_app/immutable/chunks/index.64af3f35.js"];
export const stylesheets = [];
export const fonts = [];
