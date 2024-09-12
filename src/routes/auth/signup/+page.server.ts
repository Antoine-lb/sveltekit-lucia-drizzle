import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { generateIdFromEntropySize } from 'lucia';
import { hash } from '@node-rs/argon2';

import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { UserTable } from '$lib/server/schema';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		// Basic input validation
		if (
			typeof username !== 'string' ||
			username.length < 4 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return fail(400, {
				error:
					'Invalid username. Must be 4-31 characters and consist of lowercase letters, digits, hyphens, or underscores.'
			});
		}

		if (typeof password !== 'string' || password.length < 4) {
			// Recommended to have at least 4 characters for password
			return fail(400, {
				error: 'Invalid password. Password must be at least 4 characters long.'
			});
		}

		// Check if the username is already taken
		// Assuming `UserTable` correctly points to your user schema
		const existingUser = await db.query.UserTable.findFirst({
			where: (UserTable, { eq }) => eq(UserTable.username, username.toLowerCase())
		});

		if (existingUser) {
			return fail(409, { error: 'Username already taken' }); // HTTP 409 Conflict
		}

		const userId = generateIdFromEntropySize(10); // Generates a 16 characters long ID
		const passwordHash = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		// Insert the new user into the database
		await db.insert(UserTable).values({
			id: userId,
			username: username,
			password_hash: passwordHash
		});

		// Create user session and set cookie
		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		// Redirect user after successful registration
		redirect(302, '/');
	}
};
