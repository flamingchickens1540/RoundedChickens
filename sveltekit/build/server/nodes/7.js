

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/scout/match/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.f8578926.js","_app/immutable/chunks/scheduler.682ccc96.js","_app/immutable/chunks/index.64af3f35.js"];
export const stylesheets = ["_app/immutable/assets/7.662b2a57.css"];
export const fonts = [];
