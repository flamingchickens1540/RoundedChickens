import { writable, type Writable } from 'svelte/store';
import { defaultPitData, defaultScout, defaultTeamMatch, type PitData, type TeamMatch, type Scout } from '$lib/types';

export const scout: Writable<Scout> = writable(defaultScout);

export const match: Writable<TeamMatch> = writable(defaultTeamMatch);

export const pit: Writable<PitData> = writable(defaultPitData); 
