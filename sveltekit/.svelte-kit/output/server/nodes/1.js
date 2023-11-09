

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4210c995.js","_app/immutable/chunks/scheduler.682ccc96.js","_app/immutable/chunks/index.64af3f35.js","_app/immutable/chunks/singletons.2e83b40f.js"];
export const stylesheets = [];
export const fonts = [];
