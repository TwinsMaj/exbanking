import { Deposit } from './deposit';
import { BankDatabase } from './../bank-database';
import { Transfer } from './transfer';

let bankDatabase: BankDatabase;

beforeEach(() => {
	bankDatabase = new BankDatabase();
	new Deposit('jones', 300.0, 'USD', bankDatabase).execute();
	new Deposit('silje', 450.14, 'USD', bankDatabase).execute();
});

describe('Transfer', () => {
	it('should successfully execute a transfer between two customers', () => {
		const expected = { OK: true, fromUsernameBalance: 175, toUsernameBalance: 575.14 };

		const transferService = new Transfer('jones', 'silje', 125, 'USD', bankDatabase);
		const actual = transferService.execute();

		expect(actual).toEqual(expected);
	});

	it('should fail if bank accounts are not thesame', () => {
		const expected = {
			name: 'Transaction Error',
			type: 'AccountsDontMatch',
			message: "Either one of the customers don't have a AUD account",
		};

		new Deposit('jones', 780.0, 'AUD', bankDatabase).execute();
		const transferService = new Transfer('jones', 'silje', 125, 'AUD', bankDatabase);
		const actual = transferService.execute();

		expect(actual).toEqual(expected);
	});
});
