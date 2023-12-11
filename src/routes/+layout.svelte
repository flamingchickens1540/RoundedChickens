<script lang="ts">
	import "../app.css";
	import "@fontsource/poppins";
	import "@fontsource/teko";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>Rounded Chickens</title>
</svelte:head>

<slot />



<style>
	:global(html) {
		font-family: poppins, sans-serif;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: teko, sans-serif;
	}
	/* .boundingBox {
		display: grid;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}
</style> */
