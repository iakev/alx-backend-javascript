import { express, request, response } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';
// import { filePath } from '../server';

// StudentsController.path = filePath;
const router = express.Router();
router.get('/', AppController.getHomepage(request, response));
router.get('/students', StudentsController.getAllStudents(request, response));
router.get('/students/:major', StudentsController.getAllStudentsByMajor(request, response));
export default router;
