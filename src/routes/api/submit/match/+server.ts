import type { Match, Team, TeamMatch } from "$lib/types"
import { json, type RequestEvent, type RequestHandler } from "@sveltejs/kit"

export const POST: RequestHandler = async (event: RequestEvent) => {
    const body: TeamMatch = await event.request.json();
    if (body.data == null) return json({}, { status: 400 })
    // award points to scouts
    let data = body.data;
    // insert into database here
    return json({}, { status: 200 })    
}