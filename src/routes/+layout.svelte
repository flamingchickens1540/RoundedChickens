<script>
  import "../app.css";
  import "@fontsource/poppins"
  import "@fontsource/teko"
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="container" style="padding: 50px 0 100px 0">
	<slot />
</div>

<style>
  :global(html) {
    font-family: poppins, sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: teko, sans-serif;
  }
</style>