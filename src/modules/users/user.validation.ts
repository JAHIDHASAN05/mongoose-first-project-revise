import { z } from "zod";

const UserValidationSchema = z.object({
    
    password:z.string({
        invalid_type_error: "Password Must be string"
    }).max(20,{message: "password is too long"}).optional(),
 
    role: z.enum(['admin', 'student', 'faculty']),


})

export const userValidation ={
    UserValidationSchema
}