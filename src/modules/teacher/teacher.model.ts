import { Schema, model } from "mongoose";
import { TTeacher } from "./teacher.interface";



const teacherSchema= new Schema<TTeacher>({
    name:{
        firstName:{type: String, required: true},
        lastName: {type:String, required:true}
    },
    active: ['active', 'inactve'],
    address: {type: String, required:true},
    age: {type: String, required: true},
    email: {type: String , required: true},
    id: {type: String, required: true},
    image:{type:String, required: true}
})



export const TeacherModal = model<TTeacher>('teacher', teacherSchema )