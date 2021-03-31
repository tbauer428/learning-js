export class BankAccount {
  constructor() {
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = true;
    this.balance = 0;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
    this.balance = 0;
  }

  deposit(value) {
    if (!this.isOpen || value < 0) {
      throw new ValueError();
    }

    this.balance += value;
  }

  withdraw(value) {
    if (value < 0 || value > this.balance) {
      throw new ValueError();
    }

    this.balance -= value;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    return this._balance;
  }

  set balance(balance) {
    this._balance = balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
