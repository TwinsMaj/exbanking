import { Account } from './account';
import { invalidCurrencyError } from './errors/currency-errors';
import { accountDoesNotExistError, accountsDontMatchError, notEnoughMoneyError } from './errors/transaction-errors';
import { userAlreadyExistsError, userDoesNotExistError } from './errors/user-errors';
import { TransferBalance, Balance, BankAccounts, BankingError, NewBalance, OK } from './types';
import { isValidCurrency } from './utils/currency';

/* eslint-disable require-jsdoc */
export class BankDatabase {
	private bankAccounts: BankAccounts = {};

	public createAccount(username: string): OK | BankingError {
		if (username in this.bankAccounts) {
			return userAlreadyExistsError(`customer with username: ${username} already exist`);
		}
		this.bankAccounts[username] = new Account();

		return { OK: true };
	}

	public credit(username: string, amount: number, currency: string): (OK & NewBalance) | BankingError {
		if (!isValidCurrency(currency)) {
			return invalidCurrencyError('currency is not supported');
		}

		if (!(username in this.bankAccounts)) {
			this.createAccount(username);
		}

		const customer = this.bankAccounts[username];

		if (!customer.isAccountExist(currency)) {
			customer.addAccountFor(currency);
		}

		const newBalance = customer.credit(amount, currency);

		return { OK: true, newBalance };
	}

	public debit(username: string, amount: number, currency: string): (OK & NewBalance) | BankingError {
		if (!isValidCurrency(currency)) {
			return invalidCurrencyError('currency is not supported');
		}

		if (!(username in this.bankAccounts)) {
			return userDoesNotExistError(`customer with username: ${username} does not exist`);
		}

		const customer = this.bankAccounts[username];

		if (!customer.isAccountExist(currency)) {
			return accountDoesNotExistError(`Bank account with currency ${currency} does not exist`);
		}

		if (!customer.isFundSufficient(amount, currency)) {
			return notEnoughMoneyError('Insufficient funds');
		}

		const newBalance = customer.debit(amount, currency);

		return { OK: true, newBalance };
	}

	public getAccountBalance(username: string, currency: string): (OK & Balance) | BankingError {
		if (!isValidCurrency(currency)) {
			return invalidCurrencyError('currency is not supported');
		}

		if (!(username in this.bankAccounts)) {
			return userDoesNotExistError(`customer with username: ${username} does not exist`);
		}

		const customer = this.bankAccounts[username];

		if (!customer.isAccountExist(currency)) {
			return accountDoesNotExistError(`Bank account with currency ${currency} does not exist`);
		}

		const balance = customer.getAccountBalance(currency);

		return { OK: true, balance };
	}

	public send(
		fromUsername: string,
		toUsername: string,
		amount: number,
		currency: string,
	): (OK & TransferBalance) | BankingError {
		const fromCustomer = this.bankAccounts[fromUsername];
		const toCustomer = this.bankAccounts[toUsername];

		if (!fromCustomer.isAccountExist(currency) || !toCustomer.isAccountExist(currency)) {
			return accountsDontMatchError(`Either one of the customers don't have a ${currency} account`);
		}

		this.debit(fromUsername, amount, currency);
		this.credit(toUsername, amount, currency);

		const { balance: fromUsernameBalance } = this.getAccountBalance(fromUsername, currency) as OK & Balance;
		const { balance: toUsernameBalance } = this.getAccountBalance(toUsername, currency) as OK & Balance;

		fromUsernameBalance;
		return { OK: true, fromUsernameBalance, toUsernameBalance };
	}
}
