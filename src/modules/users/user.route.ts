import express, { NextFunction, Request, Response } from 'express'
import { userController } from './user.controller'

const router= express.Router()



const middleWareValidateRequest =(name:string)=>{
  return  (req:Request, res:Response, next:NextFunction)=>{

     console.log(name);
     next()
    }
}



router.post('/create-student',middleWareValidateRequest('i am middle ware params'), userController.createUser)



export const userRoutes= router
