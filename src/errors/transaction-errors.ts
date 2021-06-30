import {
	AccountDoesNotExist,
	NotEnoughMoney,
	SenderDoesNotExist,
	ReceiverDoesNotExist,
	AccountsDontMatch,
} from '../types';

export enum TransactionError {
	NotEnoughMoney = 'NotEnoughMoney',
	SenderDoesNotExist = 'SenderDoesNotExist',
	ReceiverDoesNotExist = 'ReceiverDoesNotExist',
	AccountDoesNotExist = 'AccountDoesNotExist',
	AccountsDontMatch = 'AccountsDontMatch',
}

export const notEnoughMoneyError = (message: string): NotEnoughMoney => ({
	name: 'Transaction Error',
	type: TransactionError.NotEnoughMoney,
	message,
});

export const senderDoesNotExistError = (message: string): SenderDoesNotExist => ({
	name: 'Transaction Error',
	type: TransactionError.SenderDoesNotExist,
	message,
});

export const receiverDoesNotExistError = (message: string): ReceiverDoesNotExist => ({
	name: 'Transaction Error',
	type: TransactionError.ReceiverDoesNotExist,
	message,
});

export const accountDoesNotExistError = (message: string): AccountDoesNotExist => ({
	name: 'Transaction Error',
	type: TransactionError.AccountDoesNotExist,
	message,
});

export const accountsDontMatchError = (message: string): AccountsDontMatch => ({
	name: 'Transaction Error',
	type: TransactionError.AccountsDontMatch,
	message,
});
