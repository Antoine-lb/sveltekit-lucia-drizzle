<!-- routes/login/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	console.log('form', form);
</script>

<h1 class="font-bold text-xl">Sign in</h1>

{#if form?.error}
	<p class="text-red-500">{form?.error}</p>
{/if}

<form method="post" use:enhance>
	<label for="username">Username</label>
	<br />
	<input
		class="bg-slate-200 p-1 rounded-lg border border-slate-300"
		name="username"
		id="username"
	/>
	<br />
	<br />
	<label for="password">Password</label>
	<br />
	<input
		class="bg-slate-200 p-1 rounded-lg border border-slate-300"
		type="password"
		name="password"
		id="password"
	/>
	<br />
	<button class=" bg-cyan-900 text-white px-3 py-1 rounded-lg mt-3">Continue</button>
</form>
