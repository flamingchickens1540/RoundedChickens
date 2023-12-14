//INCOMPLETE

import type { Actions } from './$types';

export const actions = {
    default: async ({ request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const photos = formData.getAll('photo') as File[]
        const isRobot = formData.get('isRobot')?.toString()
        const team_key = formData.get('team_key')

        const scout_id = await getSession().then(session => session?.user.id)

        //TODO: Testing adding images to storage
        //TODO: Log bunny and robot images to different database
        // let req_data = await request.json()
        if (isRobot == "true") {
            Array.from(photos).forEach(async (photo, i) => {
                let url = `public/${team_key?.toString()}_${i}`
                let { data, error } = await supabase
                .storage
                .from('avatars')
                .upload(url, photo, {
                    cacheControl: '3600',
                    upsert: false
                })
                if (error) console.error(error, formData);
                let new_error = await supabase.from("RobotImages").insert({
                    team_key,
                    url,
                    scout_id
                });        
        
                if (new_error.error) console.error(new_error.error, formData);
            })
        } else if (isRobot == "false") {
            Array.from(photos).forEach(async (photo, i) => {
                let url = `public/${team_key?.toString()}_bunny_${i}`
                let { data, error } = await supabase
                .storage
                .from('avatars')
                .upload(url, photo, {
                    cacheControl: '3600',
                    upsert: false
                })
                if (error) console.error(error, formData);
                let new_error = await supabase.from("BunnyImages").insert({
                    team_key,
                    url,
                    scout_id
                });        
        
                if (new_error.error) console.error(new_error.error, formData);
            })
        }
    }
}