export default class AppController {
  static getHomepage(Request, Response) {
    Response.send('Hello Holberton School!');
  }
}
