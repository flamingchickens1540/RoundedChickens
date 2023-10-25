import { writable, type Writable } from 'svelte/store';
import { defaultPitData, defaultTeamMatch, PitData, TeamMatch } from '../types';

export const team_number = writable("");

export const match: Writable<TeamMatch> = writable(defaultTeamMatch);

export const pit: Writable<PitData> = writable(defaultPitData);