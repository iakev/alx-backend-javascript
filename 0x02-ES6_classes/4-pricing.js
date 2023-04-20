import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a Currency tyoe');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('curency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    const currencyDisp = this._currency.displayFullCurrency();
    return `${this._amount} ${currencyDisp}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
