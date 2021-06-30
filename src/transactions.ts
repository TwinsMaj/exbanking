/* eslint-disable require-jsdoc */
import { BankDatabase } from './bank-database';

export abstract class Transactions {
	private bankDatabase;

	constructor(bankDatabase: BankDatabase) {
		this.bankDatabase = bankDatabase;
	}

	protected getBankDatabase(): BankDatabase {
		return this.bankDatabase;
	}

	public abstract execute(): any;
}
