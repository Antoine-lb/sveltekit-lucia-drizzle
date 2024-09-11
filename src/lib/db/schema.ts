import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const ArticlesTable = sqliteTable('articles', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content')
});
