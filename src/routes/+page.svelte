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
	import RoundedButton from "$lib/components/homepage/RoundedButton.svelte";
    import GradientButton from "$lib/components/homepage/GradientButton.svelte";
    import { redirect } from "@sveltejs/kit";
</script>
<center>
	

	{#if session}
	<header>
		<nav>
			<div class="header-background p-5 bg-zinc-900 flex justify-center items-center">
				<button>
					<svg class=" absolute fill-slate-50 h-10 m-1 left-10 top-5" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
					<path d="M35.1999 20.3788H13.2279L19.9528 12.3014C20.2673 11.9231 20.4186 11.4353 20.3734 10.9454C20.3283 10.4556 20.0903 10.0037 19.712 9.68922C19.3337 9.37476 18.8459 9.22348 18.356 9.26864C17.8661 9.31381 17.4143 9.55173 17.0998 9.93006L7.83675 21.0457C7.77443 21.1342 7.7187 21.227 7.67001 21.3236C7.67001 21.4163 7.67001 21.4718 7.54033 21.5645C7.45636 21.7769 7.41239 22.003 7.41064 22.2314C7.41239 22.4598 7.45636 22.6859 7.54033 22.8984C7.54033 22.991 7.54033 23.0466 7.67001 23.1392C7.7187 23.2358 7.77443 23.3287 7.83675 23.4171L17.0998 34.5328C17.274 34.7419 17.4921 34.9101 17.7387 35.0254C17.9852 35.1406 18.2542 35.2002 18.5263 35.1997C18.9592 35.2006 19.3787 35.0498 19.712 34.7736C19.8996 34.6181 20.0547 34.4271 20.1683 34.2115C20.282 33.996 20.352 33.7601 20.3744 33.5175C20.3967 33.2748 20.371 33.0302 20.2987 32.7975C20.2264 32.5648 20.1088 32.3486 19.9528 32.1614L13.2279 24.084H35.1999C35.6912 24.084 36.1624 23.8888 36.5098 23.5414C36.8573 23.194 37.0525 22.7228 37.0525 22.2314C37.0525 21.7401 36.8573 21.2689 36.5098 20.9214C36.1624 20.574 35.6912 20.3788 35.1999 20.3788Z" fill="black"/>
					</svg>
				</button>
				<h1 class="text-white text-4xl m-1 center"><strong>HOME</strong></h1>            
				
			<div>
		</nav>
	</header>
	<div class="grid items-center justify-center">
		<div class="leaderstatHolder">
			<button class="homeWidget bg-primaryLight dark:bg-primaryDark">
				<h1 class="standoutText color-black dark:color-white">
					LEADERBOARD
				</h1>
				<div class="svgHolder bg-backgroundLight dark:bg-backgroundDark">
					<svg
						class="widgetIcon fill-black dark:fill-white"
						viewBox="0 0 108 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="fill-black dark:fill-white"
							d="M2 27.7936V95.9624C2 96.451 2.19411 96.9196 2.53963 97.2651C2.88514 97.6107 3.35377 97.8048 3.8424 97.8048H35.1632V27.7936C35.1632 26.8163 34.775 25.8791 34.0839 25.188C33.3929 24.497 32.4557 24.1088 31.4784 24.1088H5.6848C4.70753 24.1088 3.77029 24.497 3.07925 25.188C2.38822 25.8791 2 26.8163 2 27.7936Z"
							stroke-width="3.72674"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							class="fill-black dark:fill-white"
							d="M68.3268 2H38.8484C37.8711 2 36.9339 2.38822 36.2428 3.07925C35.5518 3.77029 35.1636 4.70753 35.1636 5.6848V97.8048H72.0116V5.6848C72.0116 4.70753 71.6234 3.77029 70.9323 3.07925C70.2413 2.38822 69.304 2 68.3268 2Z"
							stroke-width="3.72674"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							class="fill-black dark:fill-white"
							d="M101.49 38.848H75.6965C74.7192 38.848 73.782 39.2362 73.091 39.9273C72.3999 40.6183 72.0117 41.5556 72.0117 42.5328V97.8048H103.333C103.821 97.8048 104.29 97.6107 104.635 97.2652C104.981 96.9197 105.175 96.4511 105.175 95.9624V42.5328C105.175 41.5556 104.787 40.6183 104.096 39.9273C103.405 39.2362 102.467 38.848 101.49 38.848Z"
							stroke-width="3.72674"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</button>
			<button class="homeWidget bg-primaryLight dark:bg-primaryDark">
				<h1 class="standoutText color-black dark:color-white">
					STATISTICS
				</h1>
				<div class="svgHolder bg-backgroundLight dark:bg-backgroundDark">
					<svg
						class="widgetIcon dark:fill-white fill-black"
						viewBox="0 0 120 90"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="fill-black dark:fill-white"
							d="M92.7143 67.2926H97.9482C99.4436 67.2926 100.939 65.7972 100.939 64.3018V10.4677C100.939 8.97235 99.4436 7.47696 97.9482 7.47696H92.7143C91.2189 7.47696 89.7235 8.97235 89.7235 10.4677V64.3018C89.7235 65.7972 91.2189 67.2926 92.7143 67.2926ZM47.8525 67.2926H53.0864C54.5818 67.2926 56.0772 65.7972 56.0772 64.3018V17.9447C56.0772 16.4493 54.5818 14.9539 53.0864 14.9539H47.8525C46.3571 14.9539 44.8618 16.4493 44.8618 17.9447V64.3018C44.8618 65.7972 46.3571 67.2926 47.8525 67.2926ZM70.2834 67.2926H75.5173C77.0127 67.2926 78.5081 65.7972 78.5081 64.3018V32.8986C78.5081 31.4032 77.0127 29.9078 75.5173 29.9078H70.2834C68.788 29.9078 67.2926 31.4032 67.2926 32.8986V64.3018C67.2926 65.7972 68.788 67.2926 70.2834 67.2926ZM115.893 78.5081H11.2154V3.73848C11.2154 1.67297 9.54247 0 7.47696 0H3.73848C1.67297 0 0 1.67297 0 3.73848V82.2466C0 86.3752 3.34828 89.7235 7.47696 89.7235H115.893C117.958 89.7235 119.631 88.0505 119.631 85.985V82.2466C119.631 80.181 117.958 78.5081 115.893 78.5081ZM25.4217 67.2926H30.6555C32.1509 67.2926 33.6463 65.7972 33.6463 64.3018V47.8525C33.6463 46.3571 32.1509 44.8618 30.6555 44.8618H25.4217C23.9263 44.8618 22.4309 46.3571 22.4309 47.8525V64.3018C22.4309 65.7972 23.9263 67.2926 25.4217 67.2926Z"
						/>
					</svg>
				</div>
			</button>
		</div>
	
		<RoundedButton onclick={() => {redirect(300, "/scout/image")}}> <a href="/scout/image"> IMAGE UPLOAD</RoundedButton>
		<RoundedButton onclick={() => {redirect(300, "/scout/pit")}}><a href="/scout/pit">PIT SCOUT</RoundedButton>
		<GradientButton onclick={() => {redirect(300, "/scout/match")}}><a href="/scout/match">MATCH SCOUT</GradientButton>
	</div>
	{:else}
	<h1 class="text-6xl text-amber-300 font-bold underline text-center p-4">
		RoundedChickens
	</h1>
		<button
			class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 text-2xl rounded"
			on:click={login}>Login</button
		>
	{/if}
</center>

<style>
	.widgetIcon {
        height: 70%;
    }
    .svgHolder {
        margin-top: 0.1rem;
        height: 7rem;
        border-radius: 1rem;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .standoutText {
        margin-top: 0.4rem;
        font-size: 1.3rem;
        text-align: center;
        width: 90%;
    }
    .homeWidget {
        width: 46%;
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        height: 100%;
        border-radius: 1rem;
        margin: 2%;
        filter: drop-shadow(0px 0.5rem 0.5rem rgba(0, 0, 0, 0.25));
    }
    .leaderstatHolder {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>