import express from 'express'
import { academicSemisterModel } from './academicSemister.model'
import { academicSemisterController } from './academicSemister.controller'

const router = express.Router()
router.post('/create-semister', academicSemisterController.createAcademicSemister )



export const academicSemisterRoutes= router