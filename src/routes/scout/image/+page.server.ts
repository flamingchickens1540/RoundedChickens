//INCOMPLETE

import type { Actions } from './$types';

export const actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()

    //TODO: Add images to storage
    //TODO: Log bunny and robot images to different database
    const { error } = await supabase.from("RobotImages").insert({
      scout_id: await getSession().then(session => session?.user.id),
    })

    if (error) console.error(error, formData);

  },
} satisfies Actions;