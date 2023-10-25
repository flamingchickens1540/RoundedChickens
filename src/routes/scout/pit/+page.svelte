<script lang="ts">
    import { redirect } from '@sveltejs/kit';
    import { pit } from '../../../lib/stores/stores';
    let team_keys: string[] = [] // supabase can handle this with realtime
 
    export function scout(team: string) {
        pit.update((n) => {
            n.team_key = `frc${team}`
        })
        throw redirect(302, '/scout/pit/form');
    }
</script>

<h1>Pit Scouting</h1>

{#each team_keys as team}
    <h3>{team}</h3>
    <button on:click={() => scout(team)}>Scout Team</button>
{/each}