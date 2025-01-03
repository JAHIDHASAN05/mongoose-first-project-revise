import { TTeacher } from "./teacher.interface";
import { TeacherModal } from "./teacher.model";



const createTeacher =async(teacher:TTeacher)=>{
    
    const result= await TeacherModal.create(teacher)
    return result
}

export const TeacherService ={
    createTeacher
}