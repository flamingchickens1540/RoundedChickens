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
		} = supabase.auth.onAuthStateChange((event, _session) => {
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
<div
class="header-background p-5 bg-zinc-900 flex justify-center items-center"
>
<button>
	<a href="/homepage">
	<svg
		class=" absolute fill-slate-50 h-10 m-1 left-10 top-4"
		viewBox="0 0 45 45"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M35.1999 20.3788H13.2279L19.9528 12.3014C20.2673 11.9231 20.4186 11.4353 20.3734 10.9454C20.3283 10.4556 20.0903 10.0037 19.712 9.68922C19.3337 9.37476 18.8459 9.22348 18.356 9.26864C17.8661 9.31381 17.4143 9.55173 17.0998 9.93006L7.83675 21.0457C7.77443 21.1342 7.7187 21.227 7.67001 21.3236C7.67001 21.4163 7.67001 21.4718 7.54033 21.5645C7.45636 21.7769 7.41239 22.003 7.41064 22.2314C7.41239 22.4598 7.45636 22.6859 7.54033 22.8984C7.54033 22.991 7.54033 23.0466 7.67001 23.1392C7.7187 23.2358 7.77443 23.3287 7.83675 23.4171L17.0998 34.5328C17.274 34.7419 17.4921 34.9101 17.7387 35.0254C17.9852 35.1406 18.2542 35.2002 18.5263 35.1997C18.9592 35.2006 19.3787 35.0498 19.712 34.7736C19.8996 34.6181 20.0547 34.4271 20.1683 34.2115C20.282 33.996 20.352 33.7601 20.3744 33.5175C20.3967 33.2748 20.371 33.0302 20.2987 32.7975C20.2264 32.5648 20.1088 32.3486 19.9528 32.1614L13.2279 24.084H35.1999C35.6912 24.084 36.1624 23.8888 36.5098 23.5414C36.8573 23.194 37.0525 22.7228 37.0525 22.2314C37.0525 21.7401 36.8573 21.2689 36.5098 20.9214C36.1624 20.574 35.6912 20.3788 35.1999 20.3788Z"
			fill="white"
		/>
	</svg>
</button>
</div>
<style>
	:global(html) {
		font-family: poppins, sans-serif;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: teko, sans-serif;
	}
</style>
