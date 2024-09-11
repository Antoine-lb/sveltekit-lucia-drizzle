import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'sqlite',
	schema: './src/lib/server/schema.ts',
	out: './src/lib/server/generated',
	dbCredentials: {
		url: 'sqlite.db'
	},
	verbose: true,
	strict: true
});
