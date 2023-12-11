// Helper Types

// This array type is safe, since you can't index out of bounds
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never
export type FixedLengthArray<T extends any[]> =
    Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
    & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> }

export type TeamKey = `frc${number}`

export type MatchKey = `2023orbb_${'qm' | 'qf' | 'sf' | 'f'}${number}`

export type Scoutbunny = {
    teamname: string
    number: number
    type: string
    notes: string
}

export type Scout = {
    id: `${string}-${string}-${string}-${string}-${string}`,
    name: string,
    // commented handled by supabase
    // password: string, // hashed
    // coins: number,
    is_assigned: boolean
}

export type ScoutConfig = {
    color: "light" | "dark"
}

export const defaultScout: Scout = {
    id: " - - - - ",
    name: "Pesto",
    // password: "",
    // coins: 0,
    is_assigned: false
}

export type Match = {
    key: MatchKey,
    matches: FixedLengthArray<[TeamMatch, TeamMatch, TeamMatch, TeamMatch, TeamMatch, TeamMatch]>, // the first 3 are red
}

export type Team = {
    team_key: TeamKey,
    nickname: string,
    bunnies: string // this is an id used to keep track of which bunnies this team uses
    // This is an inefficient system because a search is required to get all bunnies of a team
    // Although it does account for more 
}

export type Bunny = {
    team_bunny_key: string,
    active: boolean,
    notes: string,
}

export enum HybridLocation {
    FAR,
    MID,
    CLOSE
}

export type HybridData = {
    shots_hit: number,
    shots_missed: number,
    disabled: boolean,
    bunnies_scored: number,
    bunies_stolen: number,
    taxi: boolean,
    hybrid_location: HybridLocation,
}

export const defaultHybridData: HybridData = {
    shots_hit: 0,
    shots_missed: 0,
    disabled: false,
    bunnies_scored: 0,
    bunies_stolen: 0,
    taxi: false,
    hybrid_location: HybridLocation.CLOSE
}

export type TeleData = {
    shots_hit: number,
    shots_missed: number,
    bunnies_scored: number,
    bunnies_stolen: number,
    times_disabled: number
}

export const defaultTeleData: TeleData = {
    shots_hit: 0,
    shots_missed: 0,
    bunnies_scored: 0,
    bunnies_stolen: 0,
    times_disabled: 0
}

export type TeamMatch = {
    team_key: TeamKey, // frc1540
    match_key: MatchKey,
    data: {
        hybrid: HybridData,
        tele: TeleData,
        fielded: boolean,
        skill: number,
        broke: boolean,
        died: boolean,
        notes: string,
        parked: boolean,
    } | null
}

export const defaultTeamMatch: TeamMatch = {
    team_key: "frc0", // frc1540
    match_key: "2023orbb_qm0",
    data: null
}

// Pit scouting types

export enum DriveTrain {
    MECHANUM,
    SWERVE,
    TANK
}

export type PitData = {
    team_key: TeamKey,
    drivetrain: DriveTrain,
    hybrid_type_auto: boolean,
    hybrid_type_combo: boolean,
    hybrid_type_none: boolean,
    hybrid_location_far: boolean,
    hybrid_location_mid: boolean,
    hybrid_location_close: boolean,
    notes: string,
    bunnies: Bunny[] | null,
}

export const defaultPitData: PitData = {
    team_key: "frc0",
    drivetrain: DriveTrain.TANK,
    hybrid_type_auto: false,
    hybrid_type_combo: false,
    hybrid_type_none: false,
    hybrid_location_far: false,
    hybrid_location_mid: false,
    hybrid_location_close: false,
    notes: "",
    bunnies: null

}

export enum Positions {
    Far,
    Mid,
    Close
};

export enum ImgType {
    Bunny,
    Robot
};