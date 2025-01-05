import express, { Application, NextFunction,  Request,  Response } from 'express'
 const app:Application = express()
const port = 3000
import cors from 'cors'
import { StudentRoutes } from './modules/student/student.route'
import { TeacherRoutes } from './modules/teacher/teacher.route'
import { userRoutes } from './modules/users/user.route'
import { academicSemisterRoutes } from './modules/academicSemister/academicSemister.routes'
app.use(express.json())
app.use(cors())

app.use('/api/v1/student', StudentRoutes)
app.use('/api/v1/user', userRoutes)

app.use('/api/v1/teacher', TeacherRoutes)
app.use('/api/v1/academic-semister', academicSemisterRoutes)

app.get('/', (req:Request, res:Response) => {
    var a =10
  res.send(a)
})


app.use((err:any,   req:Request, res:Response, next:NextFunction)=>{

  let statusCode =500;
  let message = err.message || "something went wrong";

  return res.status(statusCode).json({
    success: false,
    message: message,
    error: err
  })


})

export default app