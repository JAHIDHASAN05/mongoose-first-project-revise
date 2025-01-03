import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent =async(req:Request, res:Response)=>{

   try {
    const student=req.body.student;
    const result = await     StudentServices.createStudentIntoDB(student)
    res.status(200).json({
        success: true,
        messgae: "student created successfully",
        data: result
    })
    
   } catch (error) {
    console.error(error)
   }

}

const getAllStudents=async(req:Request, res:Response)=>{
    try {

        const result= await StudentServices.getAllStudentsFromDB()
        res.status(200).json({
            success: true,
            message:"students are retrieve succesfully",
            data:result
        })
        
    } catch (error) {
        console.error(error)
    }
}

export const  StudentController={
    createStudent,
    getAllStudents

}