/* eslint-disable require-jsdoc */
import { Withdrawal } from './services/withdrawal';
import { Deposit } from './services/deposit';
import { BankDatabase } from './bank-database';
import { BankingError, NewBalance, OK, Balance, TransferBalance } from './types';
import { BalanceInquiry } from './services/balance-inquiry';
import { Transfer } from './services/transfer';

const bankDatabase = new BankDatabase();

export function createUser(username: string): OK | BankingError {
	return bankDatabase.createAccount(username);
}

export function deposit(username: string, amount: number, currency: string): (OK & NewBalance) | BankingError {
	const depositService = new Deposit(username, amount, currency, bankDatabase);

	return depositService.execute();
}

export function withdrawal(username: string, amount: number, currency: string): (OK & NewBalance) | BankingError {
	const withdrawalService = new Withdrawal(username, amount, currency, bankDatabase);

	return withdrawalService.execute();
}

export function send(
	fromUsername: string,
	toUsername: string,
	amount: number,
	currency: string,
): (OK & TransferBalance) | BankingError {
	const transferService = new Transfer(fromUsername, toUsername, amount, currency, bankDatabase);

	return transferService.execute();
}

export function getBalance(username: string, currency: string): (OK & Balance) | BankingError {
	const balanceInquiry = new BalanceInquiry(username, currency, bankDatabase);

	return balanceInquiry.execute();
}
