
import express from 'express'
import { teacherController } from './teacher.controller'
const router = express.Router()
 

router.post('/create-teacher', teacherController.createTeacher)
router.get('/',teacherController.getAllTeacher)
router.get('/:teacherId', teacherController.getAsingleTeacher)



 export const TeacherRoutes= router