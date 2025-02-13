import { Request, Response } from "express";
import { TeacherService } from "./teacher.service";



const createTeacher=async(req:Request, res:Response)=>{
    try {
        const {teacher}= req.body

        console.log(req.body)
         
        const result = await TeacherService.createTeacher(teacher)
        res.status(200).json({
            success: true,
            message: "Teacher is created successfully",
            data: result
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
const getAllTeacher = async(req:Request, res:Response)=>{
    try{
        const result = await TeacherService.getAllTeacherFromDb()
        res.status(200).json({
            success: true,
            message: "Teacher are retrieve successfully",
            data: result
        })
        

    } catch(err){
        console.log(err);
    }

}

const getAsingleTeacher = async (req:Request, res:Response)=>{
    try{
        const teacherId= req.params.teacherId;
        const result = await  TeacherService.getAsingleTeacherFromDB(teacherId)
        res.status(200).json({
            success: true, 
            message: "Teacher is retrieve succesfully",
            data: result
        })
    }catch(err){
        console.log(err);
    }
}

export const teacherController={
    createTeacher,
    getAllTeacher,
    getAsingleTeacher
}