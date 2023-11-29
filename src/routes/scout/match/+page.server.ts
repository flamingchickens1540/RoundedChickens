import type { Actions } from './$types';

export const actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()

    const { error } = await supabase.from('TeamMatches').insert({
      team_key: formData.get('team_key'),
      match_key: formData.get('match_key'),
      fielded: formData.get('fielded'),
      hybrid_start_location: formData.get('hybrid_start_location'),
      hybrid_shots_hit: formData.get('hybrid_shots_hit'),
      hybrid_shots_missed: formData.get('hybrid_shots_missed'),
      hybrid_disabled: formData.get('hybrid_disabled'),
      hybrid_bunnies_scored: formData.get('hybrid_bunnies_scored'),
      hybrid_taxi: formData.get('hybrid_taxi'),
      tele_shots_hit: formData.get('tele_shots_hit'),
      tele_shots_missed: formData.get('tele_shots_missed'),
      tele_bunnies_scored: formData.get('tele_bunnies_scored'),
      tele_bunnies_stolen: formData.get('tele_bunnies_stolen'),
      tele_times_disabled: formData.get('tele_times_disabled'),
      skill: formData.get('skill'),
      parked: formData.get('parked'),
      broke: formData.get('broke'),
      died: formData.get('died'),
      notes: formData.get('notes'),
      scout_id: await getSession().then(session => session?.user.id),
    })

    if (error) console.error(error, formData);

  },
} satisfies Actions;