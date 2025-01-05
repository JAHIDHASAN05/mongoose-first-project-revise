import { model, Schema } from "mongoose";
import { TAcademicSemister } from "./academicSemister.interface";

const academicSemisterSchema = new Schema<TAcademicSemister>({
    semisterName: {type: String, enum:['Autumn', 'Summer', "Fall"] , required: true},
    year : {type : String, required : true},
    code :{type: String , enum :['01', '02', '03'], required:true},
    startMonth : { type: String, enum:['January'  , 'February'  , 'March'  , 'April'  , 'May'  , 'June'  , 'July'  , 'August'  , 'September'  , 'October'  , 'November'  , 'December'], required:true},
    endMonth : { type: String, enum:['January'  , 'February'  , 'March'  , 'April'  , 'May'  , 'June'  , 'July'  , 'August'  , 'September'  , 'October'  , 'November'  , 'December'], required:true}

},
{
    timestamps:true
})


academicSemisterSchema.pre('save', async function(next){
    const isSemisterExist= await academicSemisterModel.findOne({
        year: this.year,
        semisterName: this.semisterName
    })
    if(isSemisterExist){
        throw new Error(`${this.semisterName} in this ${this.year} year is already exist !`);              
    }
    next()
})

 export const academicSemisterModel =model<TAcademicSemister>('Academic Semister', academicSemisterSchema)