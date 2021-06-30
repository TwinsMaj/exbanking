import { BalanceInquiry } from './balance-inquiry';
import { Deposit } from './deposit';
import { BankDatabase } from './../bank-database';

let bankDatabase: BankDatabase;

beforeEach(() => {
	bankDatabase = new BankDatabase();
	new Deposit('jones', 300.0, 'USD', bankDatabase).execute();
});

describe('Balance Inquiry', () => {
	it('should return current user balance', () => {
		const expected = { OK: true, balance: 300.0 };

		const balanceInquiryService = new BalanceInquiry('jones', 'USD', bankDatabase);
		const actual = balanceInquiryService.execute();

		expect(actual).toEqual(expected);
	});

	it('should fail if bank account does not exist', () => {
		const expected = {
			name: 'Transaction Error',
			type: 'AccountDoesNotExist',
			message: 'Bank account with currency AUD does not exist',
		};

		const balanceInquiryService = new BalanceInquiry('jones', 'AUD', bankDatabase);
		const actual = balanceInquiryService.execute();

		expect(actual).toEqual(expected);
	});
});
