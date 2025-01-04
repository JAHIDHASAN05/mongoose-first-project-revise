import express, { Application, Request, Response } from 'express'
 const app:Application = express()
const port = 3000
import cors from 'cors'
import { StudentRoutes } from './modules/student/student.route'
import { TeacherRoutes } from './modules/teacher/teacher.route'
import { userRoutes } from './modules/users/user.route'
app.use(express.json())
app.use(cors())

app.use('/api/v1/student', StudentRoutes)
app.use('/api/v1/user', userRoutes)

app.use('/api/v1/teacher', TeacherRoutes)

app.get('/', (req:Request, res:Response) => {
    var a =10
  res.send(a)
})

export default app