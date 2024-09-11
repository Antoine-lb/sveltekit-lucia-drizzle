import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'sqlite', // "mysql" | "sqlite" | "postgresql"
	schema: './src/lib/db/schema.ts',
	out: './src/lib/db/migrations',
	dbCredentials: {
		url: 'sqlite.db'
	},
	verbose: true,
	strict: true
});
