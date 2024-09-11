<!-- routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';

	import '../app.css';
</script>

<nav class="flex flex-row-reverse bg-blue-900 gap-2 text-white px-4 py-2">
	<a href="/signup">Signup</a>
	<a href="/login">Login</a>
	<form method="post" use:enhance>
		<button>Sign out</button>
	</form>
</nav>

<slot />
