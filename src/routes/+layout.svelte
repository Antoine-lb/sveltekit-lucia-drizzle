<!-- routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<nav>
	<a href="/signup">Signup</a>
	<a href="/login">Login</a>
	<form method="post" use:enhance>
		<button>Sign out</button>
	</form>
</nav>

<slot />
