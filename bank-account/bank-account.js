export class BankAccount {
  constructor() {}

  open() {
    this.balance = 0;
  }

  close() {}

  deposit() {}

  withdraw() {}

  get balance() {}

  set balance(balance) {
    return this.balance = balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
