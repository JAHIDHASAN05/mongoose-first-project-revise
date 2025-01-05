import { TAcademicSemister } from "./academicSemister.interface";
import { academicSemisterModel } from "./academicSemister.model";


const createAcademicSemisterIntoDB=async(payload:TAcademicSemister)=>{

    const result = await academicSemisterModel.create(payload)
    return result

}

export const academicSemisterService={
    createAcademicSemisterIntoDB
}