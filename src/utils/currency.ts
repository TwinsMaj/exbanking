/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import Dinero, { Currency } from 'dinero.js';
import { supportedCurrencies } from './supported-currencies';

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

export function isValidCurrency(currency: string): boolean {
	let result = true;

	if (!(currency === currency.toUpperCase()) || currency.length !== 3) {
		result = false;
	}

	if (!supportedCurrencies.includes(currency)) {
		result = false;
	}

	return result;
}
