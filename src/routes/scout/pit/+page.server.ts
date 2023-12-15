import type { Actions } from './$types';

export const actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()

    const { error } = await supabase.from('PitScouting').insert({
      team_key: formData.get('team_key'),
      drivetrain: formData.get('drivetrain'),
      hybrid_type_auto: formData.get('hybrid_type_auto'),
      hybrid_type_combo: formData.get('hybrid_type_combo'),
      hybrid_type_none: formData.get('hybrid_type_none'),
      hybrid_location_far: formData.get('hybrid_location_far'),
      hybrid_location_mid: formData.get('hybrid_location_mid'),
      hybrid_location_close: formData.get('hybrid_location_close'),
      notes: formData.get('notes'),
      bunny_id: formData.get('bunny_id'), //TODO: proper bunny logging
      scout_id: await getSession().then(session => session?.user.id),
    })

    console.error(error, formData);

  },
} satisfies Actions;