export type TUser ={
    id: string,
    password: string,
    needPasswordChange: boolean,
    role: "admin" | 'student' | 'faculty',
    isDelated: boolean,
    status: "in-progress" | 'Blocked'
}