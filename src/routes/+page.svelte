<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;

	let title = '';
	let content = '';
</script>

<main>
	<h1>Create a New Article</h1>
	<form method="post" action="?/createArticle" use:enhance>
		<div>
			<label for="title">Title</label>
			<input type="text" id="title" name="title" bind:value={title} required />
		</div>

		<div>
			<label for="content">Content</label>
			<textarea id="content" name="content" bind:value={content}></textarea>
		</div>

		<button type="submit">Create Article</button>
	</form>

	<h2>Available Articles</h2>
	<ul>
		{#if data.articles.length > 0}
			{#each data.articles as article}
				<li>
					<h3>{article.title}</h3>
					<p>{article.content}</p>
				</li>
			{/each}
		{:else}
			<p>No articles available yet.</p>
		{/if}
	</ul>
</main>
