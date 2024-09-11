import { db } from '$lib/db/index'; // Import the database connection
import { ArticlesTable } from '$lib/db/schema';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

// Load all articles from the database to display on the page
export const load: PageServerLoad = async () => {
	const articles = await db.select().from(ArticlesTable).all();
	return { articles }; // Return articles to the page
};

// Handle form submissions for creating a new article
export const actions: Actions = {
	createArticle: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const content = formData.get('content') as string;

		if (!title || title.trim().length === 0) {
			return fail(400, { error: 'Title is required' });
		}

		// Insert the new article into the database
		await db.insert(ArticlesTable).values({ title, content });

		return { success: true }; // Indicate that the article was created successfully
	}
};
