

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/panel/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c2e57b83.js","_app/immutable/chunks/scheduler.682ccc96.js","_app/immutable/chunks/index.64af3f35.js"];
export const stylesheets = ["_app/immutable/assets/5.4ab6c937.css"];
export const fonts = [];
