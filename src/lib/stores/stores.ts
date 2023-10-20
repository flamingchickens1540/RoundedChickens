import { writable, type Writable } from 'svelte/store';

export const teamNumberMatch = writable("00000");
export const selectedSystem = writable("matchScout");
export const eventkey = writable(0);
export const matchkey = writable(0);


// Match Scout

    // Hybrid
    export const hybridLocation = writable("");
    export const shotsHybrid = writable(false);
    export const taxiHybrid = writable(false);
    export const bunniesHybrid = writable(0);

    // Teleop
    export const shotsTeleop = writable(false);
    export const bunniesTeleop = writable(0);
    export const bunniesScoredTeleop = writable(0);

    // Endgame
    export const died = writable(false);
    export const notes = writable("");
    export const skill = writable(0);
    export const parked = writable(true);
    export const broke = writable(false);

    // Image Upload
    export const teamNumberImage = writable("00000");
    export const isRobot = writable(false);


// Pit scout

    export const teamNumberPit = writable("00000");
    export const driveTrain = writable("Swerve");
    export const hybridType = writable("Fully Auto");
    export const numberOfBunnies = writable(0);

    // todo 10/19/2023: Add a modular system for number of bunnies

    export const notesPit = writable("");

// End pit scout
