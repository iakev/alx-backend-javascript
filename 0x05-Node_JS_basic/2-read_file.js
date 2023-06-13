const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const fieldSet = new Set();
    let studentsCnt = 0;
    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];
      const values = line.split(',');
      if (values.length === 4) {
        if (values[values.length - 1] !== 'field') {
          studentsCnt += 1;
          fieldSet.add(values[values.length - 1]);
        }
      }
    }
    const firstNames = {};
    fieldSet.forEach((value) => {
      firstNames[value] = [];
    });

    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];
      const values = line.split(',');
      if (values.length === 4) {
        if (Object.prototype.hasOwnProperty.call(firstNames, values[values.length - 1])) {
          firstNames[values[values.length - 1]].push(values[0]);
        }
      }
    }
    console.log(`Number of students: ${studentsCnt}`);
    for (const [key, value] of Object.entries(firstNames)) {
      console.log(`Number of students in ${key} ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
