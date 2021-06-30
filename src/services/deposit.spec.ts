import { Deposit } from './deposit';
import { BankDatabase } from './../bank-database';

let bankDatabase: BankDatabase;

beforeEach(() => {
	bankDatabase = new BankDatabase();
});

describe('Deposits', () => {
	it('should execute a successful fund deposit', () => {
		const expected = { OK: true, newBalance: 300.0 };

		const depositService = new Deposit('jones', 300.0, 'USD', bankDatabase);
		const actual = depositService.execute();

		expect(actual).toEqual(expected);
	});

	it('should fail if currency is not supported', () => {
		const expected = {
			name: 'Currency Error',
			type: 'InvalidCurrency',
			message: 'currency is not supported',
		};

		const depositService = new Deposit('jones', 300.0, 'usd', bankDatabase);
		const actual = depositService.execute();

		expect(actual).toEqual(expected);
	});
});
