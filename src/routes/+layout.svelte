<!-- routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import '../app.css';

	export let data;
</script>

<nav class="flex justify-between items-center bg-cyan-900 gap-2 text-white px-4">
	<a class="font-bold font-mono" href="/">Blog</a>
	{#if data.user}
		<div class="flex items-center py-2">
			<span>Connected as "{data.user.username}"</span>
			<span class="italic text-slate-400 ml-1">(id: {data.user.id})</span>
			<form method="post" action="/auth?/logout" use:enhance>
				<button class=" bg-slate-300 opacity-60 text-cyan-900 px-3 rounded-lg ml-10"
					>Sign out</button
				>
			</form>
		</div>
	{:else}
		<div class="py-2">
			<a class=" bg-slate-300 text-cyan-900 px-3 py-1 rounded-lg ml-2" href="/auth/login">Login</a>
			<a
				class=" bg-slate-300 opacity-70 text-cyan-900 px-3 py-1 rounded-lg ml-2"
				href="/auth/signup">Create Account</a
			>
		</div>
	{/if}
</nav>

<div class="p-6">
	<slot />
</div>
