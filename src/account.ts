/* eslint-disable require-jsdoc */
import { formatAmt, add, subtract } from './utils/currency';
import { Currency } from 'dinero.js';
import { Accounts } from './types/index';

export class Account {
	private static ACCOUNT_PREFIX = 'ACCT';
	private accounts = {
		[`${Account.ACCOUNT_PREFIX}_USD`]: 0.0,
		[`${Account.ACCOUNT_PREFIX}_EUR`]: 0.0,
	};

	public credit(amount: number, currency: string): string {
		currency = currency.toUpperCase();

		const balance = this.getAccountBalance(currency);
		const total = add(amount, balance, currency as Currency);

		this.setAccountBalance(total, currency);

		return formatAmt(total, currency as Currency);
	}

	public debit(amount: number, currency: string): string {
		currency = currency.toUpperCase();

		const balance = this.getAccountBalance(currency);
		const result = subtract(amount, balance, currency as Currency);

		this.setAccountBalance(result, currency);

		return formatAmt(result, currency as Currency);
	}

	private getAccountBalance(currency: string): number {
		const accountKey = `${Account.ACCOUNT_PREFIX}_${currency}`;

		return this.accounts[accountKey];
	}

	private setAccountBalance(amount: number, currency: string): void {
		const accountKey = `${Account.ACCOUNT_PREFIX}_${currency}`;

		this.accounts[accountKey] = amount;
	}

	public getBalanceWithFormat(currency: string): string {
		currency = currency.toUpperCase();
		const balance = this.getAccountBalance(currency);

		return formatAmt(balance, currency as Currency);
	}

	public getAccounts(): Accounts {
		return this.accounts;
	}
}
