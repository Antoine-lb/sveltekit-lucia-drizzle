import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const UserTable = sqliteTable('user', {
	id: text('id').primaryKey().notNull(),
	username: text('username').notNull().unique(),
	password_hash: text('password_hash').notNull()
});

export const SessionTable = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => UserTable.id),
	expiresAt: integer('expires_at').notNull()
});

export const ArticlesTable = sqliteTable('articles', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content')
});
