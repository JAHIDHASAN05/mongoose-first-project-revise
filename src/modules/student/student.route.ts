import express from 'express'
import { StudentController } from './stundent.controller'

const router= express.Router()


router.post('/create-student',StudentController.createStudent)

export const StudentRoutes=router