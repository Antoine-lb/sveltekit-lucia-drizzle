// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	// locals.user will be available here since you set it in the handle hook
	return {
		user: locals.user
	};
};
