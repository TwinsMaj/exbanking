import { AccountsDontMatch } from './index';
import { Account } from '../Account';

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
export type InvalidCurrency = AppErrors;
export type AccountDoesNotExist = AppErrors;
export type AccountsDontMatch = AppErrors;

export type BankingError =
	| Error
	| WrongArguments
	| UserAlreadyExists
	| UserDoesNotExist
	| NotEnoughMoney
	| SenderDoesNotExist
	| ReceiverDoesNotExist
	| InvalidCurrency
	| AccountsDontMatch
	| AccountDoesNotExist;

export type Accounts = {
	[key: string]: number;
};

export type OK = {
	OK: boolean;
};

export type BankAccounts = {
	[key: string]: Account;
};

export type NewBalance = {
	newBalance: number;
};

export type Balance = {
	balance: number;
};

export type TransferBalance = {
	fromUsernameBalance: number;
	toUsernameBalance: number;
};
