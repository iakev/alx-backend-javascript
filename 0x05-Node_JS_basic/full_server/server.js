import { express } from 'express';
import router from './routes';

export const filePath = process.argv[process.argv.length - 1];
const app = express();
const port = 1245;
app.use(router);
app.listen(port);
export default app;
