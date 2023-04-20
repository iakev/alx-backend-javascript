import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof (sqft) !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    if (typeof (floors) !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Sqft ust be a number');
    }
    this._sqft = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
