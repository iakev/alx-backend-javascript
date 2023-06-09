export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (!('evacuationWarningMessage' in this)) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    if (typeof (sqft) !== 'number') {
      throw new TypeError('Sqft should be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Sqft should be a number');
    }
    this._sqft = value;
  }
}
