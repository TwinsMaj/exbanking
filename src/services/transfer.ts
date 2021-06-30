/* eslint-disable require-jsdoc */
import { BankDatabase } from '../bank-database';
import { Transactions } from '../transactions';
import { OK, BankingError, TransferBalance } from '../types';

export class Transfer extends Transactions {
	private currency;
	private fromUsername;
	private toUsername;
	private amount;

	constructor(
		fromUsername: string,
		toUsername: string,
		amount: number,
		currency: string,
		bankDatabase: BankDatabase,
	) {
		super(bankDatabase);

		this.fromUsername = fromUsername;
		this.toUsername = toUsername;
		this.amount = amount;
		this.currency = currency;
	}

	public execute(): (OK & TransferBalance) | BankingError {
		return this.getBankDatabase().send(this.fromUsername, this.toUsername, this.amount, this.currency);
	}
}
