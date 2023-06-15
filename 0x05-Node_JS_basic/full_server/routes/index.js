import {Request, Response} from 'express';
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';
// import { filePath } from '../server';

// StudentsController.path = filePath;
const router = express.Router();
router.get('/', AppController.getHomepage(Request, Response));
router.get('/students', StudentsController.getAllStudents(Request, Response));
router.get('/students/:major', StudentsController.getAllStudentsByMajor(Request, Response));
export default router;
