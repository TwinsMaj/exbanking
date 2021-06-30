// import { Account } from './Account';

// const j = new Account();

// j.credit(500.34, 'USD');

// console.log(j.debit(200.8, 'USD'));
// console.log(j.getAccounts());

// import Dinero from 'dinero.js';
// /* eslint-disable new-cap */
// // export const exbanking = (): string => {
// // 	return 'welcome...';
// // };

// try {
// 	const factor = Math.pow(10, 2);
// 	const amt = 3.5;
// 	const shipping = 22.32;
// 	const price = Dinero({ amount: Math.round(amt * factor), currency: 'eur' });

// 	const np = price.add(Dinero({ amount: Math.round(shipping * factor), currency: 'eur' }));

// 	console.log(np.getAmount() / factor);
// } catch (e) {
// 	console.log(e.getMessage());
// }
// import { formatAmt } from './utils/format-amount';

// const o = formatAmt(0.0, 'EUR').toFormat();

// console.log(o);

// import { formatAmt } from './utils/currency';

// const o = formatAmt(45.67, 'EUR');

// console.log(o);

// import { BalanceInquiry } from './services/balance-inquiry';
import { BankDatabase } from './bank-database';
import { Deposit } from './services/deposit';
import { Transfer } from './services/transfer';
// import { Withdrawal } from './withdrawal';

const db = new BankDatabase();

// db.createAccount('jones');

const c = new Deposit('jones', 20, 'AUD', db);
const o = new Deposit('tola', 5, 'USD', db);
const tr = new Transfer('jones', 'tola', 5, 'AUD', db);
// const bi = new BalanceInquiry('jones', 'USD', db);

c.execute();
o.execute();
const re = tr.execute();
// const d = bi.execute();
// const w = new Withdrawal('jonres', 8, 'USD', db);
// const a = w.execute();

console.log(re);
