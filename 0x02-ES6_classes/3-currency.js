export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof (name) !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
