/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import Dinero, { Currency } from 'dinero.js';
import { getUserLocale } from 'get-user-locale';

export function formatAmt(amt: number, currency: Currency): any {
	const userLocale = getUserLocale();
	const factor = Math.pow(10, 2);

	return Dinero({ amount: Math.round(amt * factor), currency })
		.setLocale(userLocale)
		.toFormat();
}

export function add(amt: number, to: number, currency: Currency): number {
	const factor = Math.pow(10, 2);

	const total = Dinero({ amount: Math.round(amt * factor), currency })
		.add(Dinero({ amount: Math.round(to * factor), currency }))
		.getAmount();

	return total / factor;
}

export function subtract(amt: number, from: number, currency: Currency): number {
	const factor = Math.pow(10, 2);

	const total = Dinero({ amount: Math.round(from * factor), currency })
		.subtract(Dinero({ amount: Math.round(amt * factor), currency }))
		.getAmount();

	return total / factor;
}
