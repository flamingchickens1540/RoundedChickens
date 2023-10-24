// Helper Types

// This array type is safe, since you can't index out of bounds
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never
type FixedLengthArray<T extends any[]> =
    Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
    & { [Symbol.iterator]: () => IterableIterator< ArrayItems<T> > }


type Match = {
    key: string,
    matches: FixedLengthArray<[TeamMatch, TeamMatch, TeamMatch, TeamMatch, TeamMatch, TeamMatch]>, // 6 
}

type Team = {
    team_key: string,
    nickname: string,
    bunnies: string // this is an id used to keep track of which bunnies this team uses
    // This is an inefficient system because a search is required to get all bunnies of a team
    // Although it does account for more 
}

type Bunny = {
    team_bunny_key: string,
    active: boolean,
    notes: string,
    scout_id: string
}

type TeamMatch = {
    team_key: string, // frc1540
    match_key: string,
    hybrid: HybridData,
    tele: TeleData,
    fielded: boolean,
    skill: number,
    broke: boolean,
    died: boolean,
    notes: string,
    parked: boolean,
    scout_id: string
}

type HybridData = {
    hots_hits: number,
    shots_disabled: number,
    bunnies_scored: number,
    taxi: boolean,
    hybrid_location: HybridLocation,
}

type TeleData = {
    tele_shots_hit: number,
    tele_shots_miss: number,
    tele_bunnies_scored: number,
    tele_bunnies_stolen: number,
}

enum HybridLocation {
    FAR,
    MID,
    CLOSE
}