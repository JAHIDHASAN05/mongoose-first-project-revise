import express from 'express'
import { StudentController } from './stundent.controller'

const router= express.Router()


router.post('/create-student',StudentController.createStudent)
router.get('/',StudentController.getAllStudents)
router.get('/:studentId', StudentController.getASingleStudent)

export const StudentRoutes=router