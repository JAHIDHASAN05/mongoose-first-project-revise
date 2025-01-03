import { TTeacher } from "./teacher.interface";
import { TeacherModal } from "./teacher.model";



const createTeacher =async(teacher:TTeacher)=>{
    
    const result= await TeacherModal.create(teacher)
    return result
}

const getAllTeacherFromDb = async ()=>{
    const result= await TeacherModal.find()
    return result
}

const getAsingleTeacherFromDB = async (teacherId:string)=>{
    const result = await TeacherModal.findOne({id:teacherId})
    return result
}
      
export const TeacherService ={
    createTeacher,
    getAllTeacherFromDb,
    getAsingleTeacherFromDB
}