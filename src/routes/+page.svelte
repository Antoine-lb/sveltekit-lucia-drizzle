<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;

	let title = '';
	let content = '';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main>
	{#if data.user}
		<h1 class="text-xl font-bold">Create a New Article</h1>
		<form method="post" action="?/createArticle" use:enhance>
			<div>
				<label for="title">Title</label>
				<input
					class="bg-slate-200 p-1 rounded-lg border border-slate-300"
					type="text"
					id="title"
					name="title"
					bind:value={title}
					required
				/>
			</div>

			<div class="flex flex-col">
				<label for="content">Content</label>
				<textarea
					class="bg-slate-200 p-1 rounded-lg border border-slate-300"
					id="content"
					name="content"
					bind:value={content}
				></textarea>
			</div>

			<button type="submit" class="bg-cyan-900 text-white p-1 px-3 rounded-lg mt-3 text-lg"
				>Create Article</button
			>
		</form>
	{:else}
		<p>You need to be conected to create articles.</p>
	{/if}

	<br />
	<br />
	<h2 class="text-xl font-bold">Articles:</h2>
	<ul>
		{#if data.articles.length > 0}
			{#each data.articles as article}
				<li>
					<h3 class="font-bold text-md">{article.title}</h3>
					<p>{article.content}</p>
				</li>
			{/each}
		{:else}
			<p>No articles available yet.</p>
		{/if}
	</ul>
</main>
