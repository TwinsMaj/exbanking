# exbanking
A simple NPM package banking application written in Typescript language.

# install
`npm i @twinsmaj/exbanking`

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

`const getBalance = (username: string, currency: string): (Ok & { balance: number } | BankingError) => {};`

- Returns `balance `of the user in given format

`const send = (fromUsername: string, toUsername: string, amount: number, currency: string): (Ok & { fromUsernameBalance: number, toUsernameBalance: number } | BankingError) => {};`

- Decreases `fromUsername's` balance in given `currency` by `amount` value
- Increases `toUsername's` balance in given `currency` by `amount` value
- Returns `balance` of `fromUser` and `toUser` in given format
