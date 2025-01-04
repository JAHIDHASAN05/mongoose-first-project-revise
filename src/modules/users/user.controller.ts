import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser= async (req: Request, res: Response)=>{

    try {
     const userData = req.body
    

     const {password, student}= userData
   

     const result= await userServices.createUserIntoDB(password,student)

     res.status(200).json({ 
        success: true,
        message: "User is created successfully",
        data: result
     })

        
    } catch (error) {
        console.log(error);
    }
}


export const userController={
    createUser
}