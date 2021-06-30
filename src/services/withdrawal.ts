/* eslint-disable require-jsdoc */
import { BankDatabase } from '../bank-database';
import { Transactions } from '../transactions';
import { OK, BankingError, NewBalance } from '../types';

export class Withdrawal extends Transactions {
	private currency;
	private username;
	private amount;

	constructor(username: string, amount: number, currency: string, bankDatabase: BankDatabase) {
		super(bankDatabase);

		this.username = username;
		this.amount = amount;
		this.currency = currency;
	}

	public execute(): (OK & NewBalance) | BankingError {
		return this.getBankDatabase().debit(this.username, this.amount, this.currency);
	}
}
