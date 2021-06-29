import { WrongArguments } from '../types';

export enum Error {
	WrongArguments = 'WrongArguments',
}

export const wrongArgumentsError = (message: string): WrongArguments => ({
	name: 'Error',
	type: Error.WrongArguments,
	message,
});
