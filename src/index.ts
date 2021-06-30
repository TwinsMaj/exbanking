import { Account } from './Account';

const j = new Account();

j.credit(500.34, 'USD');

console.log(j.debit(200.8, 'USD'));
console.log(j.getAccounts());

// import Dinero from 'dinero.js';
// /* eslint-disable new-cap */
// // export const exbanking = (): string => {
// // 	return 'welcome...';
// // };

// const factor = Math.pow(10, 2);
// const amt = 3.5;
// const shipping = 22.32;
// const price = Dinero({ amount: Math.round(amt * factor), currency: 'EUR' });

// const np = price.add(Dinero({ amount: Math.round(shipping * factor), currency: 'EUR' }));

// console.log(np.getAmount() / factor);

// import { formatAmt } from './utils/format-amount';

// const o = formatAmt(0.0, 'EUR').toFormat();

// console.log(o);

// import { formatAmt } from './utils/currency';

// const o = formatAmt(45.67, 'EUR');

// console.log(o);
