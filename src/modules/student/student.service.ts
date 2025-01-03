import { IStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB =async (student:IStudent)=>{
    const result =    await StudentModel.create(student)
    return result;
}
const getAllStudentsFromDB = async()=>{
    const result = await StudentModel.find()
    return result
}

const getASingleStudentFromDB= async(studentId:string)=>{
    const result= await StudentModel.findOne({id:studentId})
    return result

}

export const StudentServices={
    createStudentIntoDB,
    getAllStudentsFromDB,
    getASingleStudentFromDB,

}