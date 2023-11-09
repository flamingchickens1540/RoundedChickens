

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/monitor/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.d2c6d5b9.js","_app/immutable/chunks/scheduler.682ccc96.js","_app/immutable/chunks/index.64af3f35.js"];
export const stylesheets = [];
export const fonts = [];
