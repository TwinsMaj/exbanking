import { UserDoesNotExist, UserAlreadyExists } from '../types/index';

export enum UserError {
	UserDoesNotExist = 'UserDoesNotExist',
	UserAlreadyExists = 'UserAlreadyExists',
}

export const userDoesNotExistError = (message: string): UserDoesNotExist => ({
	name: 'User Error',
	type: UserError.UserDoesNotExist,
	message,
});

export const userAlreadyExistsError = (message: string): UserAlreadyExists => ({
	name: 'User Error',
	type: UserError.UserAlreadyExists,
	message,
});
