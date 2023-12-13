<script lang="ts">
    import Header from "$lib/components/Header.svelte";

    import Button from "$lib/components/Button.svelte";

    import LeaderStat from "$lib/components/LeaderStat.svelte";
    import Leaderboard from "$lib/components/Leaderboard.svelte";

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
	<Header>Leaderboard</Header>

	{#if session}
		<div class="grid grid-rows-1 grid-cols-3 m-4 gap-2">
            <Button text="Points" customTailwind="border-[#995200] hover:border-4 transition-all border-2 text-center bg-[#ffa234] text-[#995200] font-bold p-2 px-4 text-xl rounded"></Button>
            <Button text="Scouts" customTailwind="border-[#995200] hover:border-4 transition-all border-2 shadow-[0px_4px_4px_0px_rgba(255, 139, 0, 0.25)] text-center bg-[#ff8b00] text-[#995200] font-bold p-2 px-4 text-xl rounded"></Button>
            <Button text="Coins" customTailwind="border-[#995200] hover:border-4 transition-all border-2 text-center bg-[#ffa234] text-[#995200] font-bold p-2 px-4 text-xl rounded"></Button>
        </div>
        <div class="grid grid-cols-1 gap-4 m-4">
            <LeaderStat></LeaderStat>
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