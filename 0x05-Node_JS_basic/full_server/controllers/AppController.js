export default class AppController {
  static getHomepage(requests, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
