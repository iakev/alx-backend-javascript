import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(StudentsController.path)
      .then((result) => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('This is the list of our students\n', 'utf8');
        const outputList = [];
        for (const [key, value] of Object.entries(result).sort()) {
          outputList.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        const output = outputList.join('\n');
        response.end(output);
      })
      .catch(() => {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params.major;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(StudentsController.path)
        .then((result) => {
          response.writeHead(200, { 'Content-Type': 'text/plain' });
          response.end(`List: ${result[major].join(', ')}`);
        })
        .catch(() => {
          response.writeHead(500, { 'Content-Type': 'text/plain' });
          response.end('Cannot load the database');
        });
    } else {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Major parameter must be CS or SWE');
    }
  }
}
