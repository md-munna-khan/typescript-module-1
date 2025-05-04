{
    //
// generic type
type GenericArray<T>=Array<T>
    // const rollNumber:number[]=[3,5,7]
    const rollNumber:GenericArray<number>=[3,5,7]
    // const mentors:string[]=['rakib','rofik','rashed',"mahir"]
    const mentors:GenericArray<string>=['rakib','rofik','rashed',"mahir"]
    // const boolArray:boolean[]=[true,false,true]
    const boolArray:GenericArray<boolean>=[true,false,true]
    //
    const user:GenericArray<{name:string,age:number}> = [
        {
            name:"munna",
            age:34
        },
        {
            name:"rohim",
            age:24
        }
    ]


    // type tuple
    type Generic<x,y>=[x,y]
    const people:Generic<string,string>=['mr.munna','mr.boltu']

const userWithId:Generic<number,{name:string,role:number}>=[12,{name:"munna",role:12}]
    //
}
