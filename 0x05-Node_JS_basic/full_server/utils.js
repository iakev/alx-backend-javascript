import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const fieldSet = new Set();
        // let studentsCnt = 0;
        for (let index = 0; index < lines.length; index += 1) {
          const line = lines[index];
          const values = line.split(',');
          if (values.length === 4) {
            if (values[values.length - 1] !== 'field') {
              // studentsCnt += 1;
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
        resolve(firstNames);
      }
    });
  });
}
