/* eslint-disable require-jsdoc */
import { BankDatabase } from '../bank-database';
import { Transactions } from '../transactions';
import { OK, BankingError, Balance } from '../types';

export class BalanceInquiry extends Transactions {
	private currency;
	private username;

	constructor(username: string, currency: string, bankDatabase: BankDatabase) {
		super(bankDatabase);

		this.username = username;
		this.currency = currency;
	}

	public execute(): (OK & Balance) | BankingError {
		return this.getBankDatabase().getAccountBalance(this.username, this.currency);
	}
}
