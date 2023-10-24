import { writable, type Writable } from 'svelte/store';

export const team_number = writable("");

export const event_key = writable(0);
export const match_key = writable(0);
export const broke = writable(false);
export const died = writable(false);
export const notes = writable("");
export const skill = writable(0);
