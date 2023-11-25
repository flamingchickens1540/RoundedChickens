<script>
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	async function logout() {
		await supabase.auth.signOut();
	}

	async function login() {
		await supabase.auth.signInWithOAuth({
			provider: "google",
		});
	}
</script>

<center>
	<h1 class="text-3xl text-amber-300 font-bold underline text-center p-4">
		RoundedChickens
	</h1>

	{#if session}
		<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={logout}>Logout</button>
	{:else}
		<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={login}>Login</button>
	{/if}
</center>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.600);
	}
</style>
