export interface AppErrors extends Error {
	type: string;
	message: string;
}

export type UserDoesNotExist = AppErrors;
export type UserAlreadyExists = AppErrors;
export type NotEnoughMoney = AppErrors;
export type WrongArguments = AppErrors;
export type SenderDoesNotExist = AppErrors;
export type ReceiverDoesNotExist = AppErrors;

export type BankingError =
	| Error
	| WrongArguments
	| UserAlreadyExists
	| UserDoesNotExist
	| NotEnoughMoney
	| SenderDoesNotExist
	| ReceiverDoesNotExist;
