const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const output = [];
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
        output.push(`Number of students: ${studentsCnt}`);
        // console.log(`Number of students: ${studentsCnt}`);
        for (const [key, value] of Object.entries(firstNames)) {
          // console.log(`Number of students in ${key} ${value.length}. List: ${value.join(', ')}`);
          output.push(`Number of students in ${key} ${value.length}. List: ${value.join(', ')}`);
        }
        resolve(output);
      }
    });
  });
}

const port = 1245;
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        const output = result.join('\n');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n', 'utf8');
        res.end(output);
      })
      .catch(() => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n', 'utf8');
        res.end('Cannot load the database');
      });
  }
});
app.listen(port);
module.exports = app;
