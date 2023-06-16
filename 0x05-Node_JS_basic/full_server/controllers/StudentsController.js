import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    console.log(process.argv[process.argv.length - 1]);
    readDatabase(process.argv[process.argv.length - 1])
      .then((result) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n', 'utf8');
        const outputList = [];
        for (const [key, value] of Object.entries(result).sort()) {
          outputList.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        const output = outputList.join('\n');
        res.end(output);
      })
      .catch((error) => {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(process.argv[process.argv.length - 1])
        .then((result) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`List: ${result[major].join(', ')}`);
        })
        .catch(() => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Cannot load the database');
        });
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Major parameter must be CS or SWE');
    }
  }
}
