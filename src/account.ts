/* eslint-disable require-jsdoc */
import { add, subtract } from './utils/currency';
import { Currency } from 'dinero.js';

export class Account {
	private static ACCOUNT_PREFIX = 'ACCT';
	private accounts = {
		[`${Account.ACCOUNT_PREFIX}_USD`]: 0.0,
		[`${Account.ACCOUNT_PREFIX}_EUR`]: 0.0,
	};

	public credit(amount: number, currency: string): number {
		const balance = this.getAccountBalance(currency);
		const total = add(amount, balance, currency as Currency);

		this.setAccountBalance(total, currency);

		return total;
	}

	public debit(amount: number, currency: string): number {
		const balance = this.getAccountBalance(currency);
		const result = subtract(amount, balance, currency as Currency);

		this.setAccountBalance(result, currency);

		return result;
	}

	public addAccountFor(currency: string): void {
		const accountKey = `${Account.ACCOUNT_PREFIX}_${currency}`;

		this.accounts[accountKey] = 0.0;
	}

	public getAccountBalance(currency: string): number {
		const accountKey = `${Account.ACCOUNT_PREFIX}_${currency}`;

		return this.accounts[accountKey];
	}

	private setAccountBalance(amount: number, currency: string): void {
		const accountKey = `${Account.ACCOUNT_PREFIX}_${currency}`;

		amount = amount <= 0 ? 0.0 : amount;
		this.accounts[accountKey] = amount;
	}

	public isAccountExist(currency: string): boolean {
		const accountKey = `${Account.ACCOUNT_PREFIX}_${currency}`;

		return accountKey in this.accounts;
	}

	public isFundSufficient(amount: number, currency: string): boolean {
		const accountKey = `${Account.ACCOUNT_PREFIX}_${currency}`;

		return this.accounts[accountKey] > amount;
	}
}
