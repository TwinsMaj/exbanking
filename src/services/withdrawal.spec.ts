import { Withdrawal } from './withdrawal';
import { Deposit } from './deposit';
import { BankDatabase } from './../bank-database';

let bankDatabase: BankDatabase;
let depositService: Deposit;

beforeEach(() => {
	bankDatabase = new BankDatabase();
	depositService = new Deposit('jones', 300.0, 'USD', bankDatabase);
});

describe('Withdrawal', () => {
	it('should execute a successful fund withdrawal', () => {
		const expected = { OK: true, newBalance: 250.0 };

		const withdrawalService = new Withdrawal('jones', 50, 'USD', bankDatabase);

		depositService.execute();
		const actual = withdrawalService.execute();

		expect(actual).toEqual(expected);
	});

	it('should return notEnoughMoney Error', () => {
		const expected = {
			name: 'Transaction Error',
			type: 'NotEnoughMoney',
			message: 'Insufficient funds',
		};

		const withdrawalService = new Withdrawal('jones', 500, 'USD', bankDatabase);

		depositService.execute();
		const actual = withdrawalService.execute();

		expect(actual).toEqual(expected);
	});

	it('should fail if user does not exits', () => {
		const expected = {
			name: 'User Error',
			type: 'UserDoesNotExist',
			message: 'customer with username: max does not exist',
		};

		const withdrawalService = new Withdrawal('max', 100, 'USD', bankDatabase);

		depositService.execute();
		const actual = withdrawalService.execute();

		expect(actual).toEqual(expected);
	});
});
