import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema= new Schema<TUser>({
    id:{type: String, required:true},
    isDelated: {type: Boolean, required: true, default:false},
    password: {type: String, required: true},
    needPasswordChange: {type: Boolean, required: true, default:true},
    status: {type: String, enum:['in-progress' ,'Blocked'], required: true ,default :'in-progress'},
    role : {type: String, enum:['admin','student','faculty'], required: true}

},
{
    timestamps:true
})

export const UserModal = model<TUser>('user', UserSchema)