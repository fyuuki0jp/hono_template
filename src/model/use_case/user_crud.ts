import { zValidator } from '@hono/zod-validator';
import type { User } from '@prisma/client';
import { z } from 'zod';
import prisma from '../adapter/prisma';

export type UserSchema = User;

export async function getAllUsers(): Promise<User[]> {
	const users = await prisma.user.findMany({ take: 5 });
	console.log(users);
	return users;
}

const createUserParam = z.object({
	user_name: z.string().min(3, { message: '3文字以上で入力してください' }),
});

export const createUserValidator = zValidator('json', createUserParam);

export async function createUser(
	user: z.infer<typeof createUserParam>,
): Promise<User> {
	console.log(user);
	const createdUser = await prisma.user.create({
		data: user,
	});
	return createdUser;
}

export async function updateUser(user: User): Promise<User> {
	const updatedUser = await prisma.user.update({
		where: {
			user_id: user.user_id,
		},
		data: user,
	});
	return updatedUser;
}

export async function getUser(user_id: string): Promise<User> {
	const user = await prisma.user.findFirst({
		where: {
			user_id: user_id,
		},
	});
	if (user === null) throw 'User not Found';
	return user;
}
