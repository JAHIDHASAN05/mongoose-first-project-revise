import { Request, Response } from "express";
import { academicSemisterService } from "./academicSemister.service";


const createAcademicSemister= async (req:Request, res:Response)=>{
    try {

        const  payload= req.body
        const result = await  academicSemisterService.createAcademicSemisterIntoDB(payload)

        res.status(200).json({
            success: true,
            message: "Academic semister is created successfully",
            data:result
        })
        
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Semister is already exist in this year",
            error: error
        })
    }
}

export const academicSemisterController= {
    createAcademicSemister
}