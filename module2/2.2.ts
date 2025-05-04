{
//
// interface

type User1={
    name:string;
    age:number
}
type RollNumber= string //  when you define type in primitive must be use type



interface User2{
    name:string;
    age:number
}
type UserWithRole1= User1 & {role:string}
interface UserWithRole2 extends User2{
    role:string
}
const user1:UserWithRole2={
    name:"munna",
    age:43,
    role:"manager"

}
// js --- >object array --->object function-->object
type Roll1=number[]

interface Roll2{
[index:number]:number
}

const rollNumber:Roll2=[2,4,6,6]

type Add1= (num1:number,num2:number)=>number

interface Add2{
    (num1:number,num2:number):number
}
const add:Add1=(num1,num2)=>{
    return num1+num2
}



//
}