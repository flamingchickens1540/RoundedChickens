//INCOMPLETE

import { randomUUID } from 'crypto';
import type { Actions } from './$types';
import { writeFile } from 'fs'

let IMAGE_HOST_PATH="https://scout.team1540.org/robot-images/"
let IMAGE_STORAGE_PATH="./robot-photos/"

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
                const fileType = photo.type.substring(6, photo.type.length)
                // let url = `public/${team_key?.toString()}_${i}_${randomUUID()}`
                const fileName = team_key?.toString() + "_" + i + "_" + randomUUID()
                // console.log("url: " + url)
                console.log(fileName)
                
                // let result1 = await supabase
                //     .storage
                //     .from('RobotImages')
                //     .upload(url, photo, {
                //         cacheControl: '3600',
                //         upsert: false
                //     })
                // if (result1.error) console.error("ERROR: ", result1.error, formData);
                let new_error = await supabase.from("RobotImages").insert({
                    team_key,
                    // url,
                    fileName, 
                    scout_id
                });        
        
                if (new_error.error) console.error("ERROR: ", new_error.error, formData);
            })
        } else if (isRobot == "false") {
            Array.from(photos).forEach(async (photo, i) => {
                const fileType = photo.type.substring(6, photo.type.length)
                let fileName = `${team_key?.toString()}_bunny_${i}_${randomUUID()}`
                let storage_path = IMAGE_STORAGE_PATH + fileName
                writeFile(
                    IMAGE_STORAGE_PATH + fileName + '.' + fileType,
                    Buffer.from(await photo.arrayBuffer()),
                    () => {
                        /* empty */
                    } //this is a required input, but we don't care if it fails
                )
                
                // let url = `public/${team_key?.toString()}_bunny_${i}_${randomUUID()}`
                // console.log("url: " + url)
                // let { data, error } = await supabase
                //     .storage
                //     .from('BunnyImages')
                //     .upload(url, photo, {
                //         cacheControl: '3600',
                //         upsert: false
                //     })
                // if (error) console.error("ERROR: ", error, formData);
                let new_error = await supabase.from("BunnyImages").insert({
                    team_key,
                    url: storage_path,
                    scout_id,
                    // bunny_id: ""
                });
        
                if (new_error.error) console.error("ERROR: ", new_error.error, formData);
            })
        }
    }
}