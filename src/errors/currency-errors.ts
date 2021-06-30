import { InvalidCurrency } from '../types/index';

export enum CurrencyError {
	InvalidCurrency = 'InvalidCurrency',
}

export const invalidCurrencyError = (message: string): InvalidCurrency => ({
	name: 'Currency Error',
	type: CurrencyError.InvalidCurrency,
	message,
});
