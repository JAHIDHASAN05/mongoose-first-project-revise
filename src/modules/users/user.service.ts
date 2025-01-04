import { object } from "zod";
import { IStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { UserModal } from "./user.model";
import { StudentModel } from "../student/student.model";



const createUserIntoDB=async(password:string , student:IStudent)=>{

    const userData:Partial<TUser> ={} 
    
  
    if (!password){
        userData.password='jahidDefaultpass'
    }else{
        userData.password=password
    }
    userData.id= '2300120'

    userData.role= 'student'
    console.log(student);


    const newUser= await UserModal.create(userData)

    if(Object.keys(newUser).length){
        student.id= newUser.id,
        student.user=newUser._id

        const reslut = await StudentModel.create(student)
        return reslut
    }
    
}



export const  userServices={
    createUserIntoDB

}