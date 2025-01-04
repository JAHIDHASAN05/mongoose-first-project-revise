import { TUser } from "./user.interface";
import { UserModal } from "./user.model";



const createUserIntoDB=async(UserData:TUser)=>{

    const result= await UserModal.create(UserData)
    return result;
}



export const  userServices={
    createUserIntoDB

}