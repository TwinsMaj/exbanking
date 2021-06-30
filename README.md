# exbanking
A simple NPM package banking application written in Typescript language.


## API Reference
`const createUser = (username: string): OK | BankingError => {}`
- Function creates new user in the system
- New user has zero balance of any currency

`const deposit = (username: string, amount: number, currency: string): (Ok & { newBalance: number } | BankingError) => {};`

- Increases user's balance in given currency by amount value
- Returns newBalance of the user in given format

`const withdraw = (username: string, amount: number, currency: string): (Ok & { newBalance: number } | BankingError) => {};`

- Decreases user's balance in given `currency` by `amount` value
- Returns `new_balance` of the user in given format