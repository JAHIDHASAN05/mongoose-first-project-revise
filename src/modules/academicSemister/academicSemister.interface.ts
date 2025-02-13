type TMonth = 
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemister ={
    semisterName: "Autumn" | "Summer" | "Fall",
    code : '01' | "02" | "03",
    year: string,
    startMonth :TMonth,
    endMonth: TMonth

}

export type TAcademicSemisterCodeNameMapper ={
  [key: string]: string

}