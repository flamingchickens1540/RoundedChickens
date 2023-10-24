import { writable, type Writable } from 'svelte/store';

export const teamNumberMatch: Writable<string> = writable("00000");
export const selectedSystem: Writable<string> = writable("matchScout");
export const eventkey: Writable<number> = writable(0);
export const matchkey: Writable<number> = writable(0);


// Match Scout

    // Hybrid
    export const hybridLocation: Writable<string> = writable("");
    export const shotsHybrid: Writable<boolean> = writable(false);
    export const taxiHybrid: Writable<boolean> = writable(false);
    export const bunniesHybrid: Writable<number> = writable(0);

    // Teleop
    export const shotsTeleop: Writable<boolean> = writable(false);
    export const bunniesTeleop: Writable<number> = writable(0);
    export const bunniesScoredTeleop: Writable<number> = writable(0);

    // Endgame
    export const died: Writable<boolean> = writable(false);
    export const notes: Writable<string> = writable("");
    export const skill: Writable<number> = writable(0);
    export const parked: Writable<boolean> = writable(true);
    export const broke: Writable<boolean> = writable(false);

    // Image Upload
    export const teamNumberImage: Writable<string> = writable("0000");
    export const isRobot: Writable<boolean> = writable(false);


// Pit scout

    export const teamNumberPit: Writable<string> = writable("0000");
    export const driveTrain: Writable<string> = writable("Swerve");
    export const hybridType: Writable<string> = writable("Fully Auto");
    export const numberOfBunnies: Writable<number> = writable(0);

    // todo 10/19/2023: Add a modular system for number of bunnies

    export const notesPit: Writable<string> = writable("");

// End pit scout
