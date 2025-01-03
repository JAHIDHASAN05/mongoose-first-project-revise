
import express from 'express'
import { teacherController } from './teacher.controller'
const router = express.Router()
 

router.post('/create-teacher', teacherController.createTeacher)



 export const TeacherRoutes= router