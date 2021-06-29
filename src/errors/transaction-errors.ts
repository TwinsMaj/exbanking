import { NotEnoughMoney, SenderDoesNotExist, ReceiverDoesNotExist } from '../types';

export enum TransactionError {
	NotEnoughMoney = 'NotEnoughMoney',
	SenderDoesNotExist = 'SenderDoesNotExist',
	ReceiverDoesNotExist = 'ReceiverDoesNotExist',
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
