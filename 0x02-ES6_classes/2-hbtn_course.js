export default class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse._validateName(name);
    HolbertonCourse._validateLength(length);
    HolbertonCourse._validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    HolbertonCourse._validateName(value);
    this._name = value;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    HolbertonCourse._validateLength(value);
    this._length = value;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    HolbertonCourse._validateStudents(value);
    this._students = value;
  }

  // Static validation methods
  static _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  static _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
