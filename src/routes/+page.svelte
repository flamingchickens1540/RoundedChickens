<script lang="ts">
    import Login from "$lib/components/Login.svelte";
    import Mainhomepage from "$lib/components/homepage/mainhomepage.svelte";
	
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

	{#if session}
		<!-- <button
			class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 text-2xl rounded"
			on:click={logout}>Logout</button
		>
		<div class="flex flex-wrap items-center justify-center my-4">
			<img class="w-10 h-10 rounded-full" src={session.user?.user_metadata.avatar_url} alt="avatar" referrerpolicy="no-referrer"/>
			<p class="text-3xl text-white pl-2">
				{session.user?.user_metadata.name}</p>

		</div>
		<img src="60fpsparrot.gif" alt=""> -->
		<Mainhomepage></Mainhomepage>

	{:else}
		<Login {login}></Login>
	{/if}
</center>
