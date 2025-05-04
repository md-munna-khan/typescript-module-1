{
// type alias
type Student={
    name:string,
    roll:number,
    age:number,
    contactNo:number
}


const student1:Student =
{
    name:'rohim',
    roll:23,
    age:23,
contactNo:343
}
const student2:Student =
{
    name:'munnna',
    roll:23,
    age:23,
contactNo:343
}
const student3:{
    name:string,
    roll:number,
    age:number,
    contactNo:number
} =
{
    name:'korim',
    roll:23,
    age:23,
contactNo:343
}

type UserName = string
type IsAdmin = boolean
let person:UserName='munna'
let isAdmin : IsAdmin=true


// function alias
type Add=(num1:string,num2:string)=>string

const add:Add= (num1,num2)=>num1+num2

}