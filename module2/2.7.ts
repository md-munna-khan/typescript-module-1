{
    //
// generic constrain with keyof operator
type Vehicle={
    bike:string,
    car:string,
    train:string
}

type Owner1= "car" | "bike" |"train" // type manually declire
type Owner2 = keyof Vehicle // shortcut union types

const getPropertyValue=<X,Y extends keyof X> (obj:X, key:Y)=>{
return obj[key]
}

const user1={
    name:"munna",
    age:34,
    live:"dhaka"
}

const result1=getPropertyValue(user1,"age")
console.log(result1)
    //
}