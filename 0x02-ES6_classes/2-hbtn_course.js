export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be string');
    }
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (typeof (students) !== 'object') {
      throw new TypeError('Students must be an array');
    }
    for (const student of students) {
      if (typeof (student) !== 'string') {
        throw new TypeError('students must be an array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = value;
  }

  get length() {
    return this._lenght;
  }

  set length(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (typeof (value) !== 'object') {
      throw new TypeError('Students must be an array');
    }
    for (const student of value) {
      if (typeof (student) !== 'string') {
        throw new TypeError('students must be an array of strings');
      }
    }
    this._students = value;
  }
}
