<script lang="ts">
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
	<h1 class="text-6xl text-amber-300 font-bold underline text-center p-4">
		RoundedChickens
	</h1>

	{#if session}
		<button
			class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 text-2xl rounded"
			on:click={logout}>Logout</button
		>
		<div class="flex flex-wrap items-center justify-center my-4">
			<img class="w-10 h-10 rounded-full" src={session.user?.user_metadata.avatar_url} alt="avatar" />
			<p class="text-3xl text-white pl-2">
				{session.user?.user_metadata.name}</p>
		</div>
	{:else}
		<button
			class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 text-2xl rounded"
			on:click={login}>Login</button
		>
	{/if}
</center>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.600);
	}
</style>
