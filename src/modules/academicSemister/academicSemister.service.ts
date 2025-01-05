import { TAcademicSemister, TAcademicSemisterCodeNameMapper } from "./academicSemister.interface";
import { academicSemisterModel } from "./academicSemister.model";


const createAcademicSemisterIntoDB=async(payload:TAcademicSemister)=>{

   

    const academicSemisterCodeNameMapper :TAcademicSemisterCodeNameMapper={
        "Autumn" :'01',
        "Summer" :"02",
        "Fall"   : "03"
        }


         if(academicSemisterCodeNameMapper[payload.semisterName] !== payload.code){
            throw new Error('Invailid Semister Code')
         }


    const result = await academicSemisterModel.create(payload)
    return result

}

export const academicSemisterService={
    createAcademicSemisterIntoDB
}