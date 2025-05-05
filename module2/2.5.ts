{
    //
// function with Generic
const createArray=(param:string):string[]=>{
    return [param]
}
const createArrayWithGeneric=<T>(param:T):T[]=>{
    return [param]
}

const res1=createArray("bangladesh")
const res2=createArrayWithGeneric<string>("badda")

type User={
    name:string,id:number
}
const resGenericObj=createArrayWithGeneric<User> ({name:"munna",id:23})

// create with tuple
const createArrayWithGenericTuple=<T,A>(param1:T,param2:A):[T,A]=>{
    return [param1,param2]
}

const restupe1=createArrayWithGenericTuple<string,number>("bangladesh",234)
const restupel2=createArrayWithGeneric<string>("badda")

type User2={
    name:string,id:number
}
const resGenericObj1=createArrayWithGenericTuple<User2,number> ({name:"munna",id:23},34)
    //

    const addCourseToFunction=<T>(student:T)=>{
        const course = "next level web Dev"
        return{
            ...student,
            course
        }
    }

const student1=addCourseToFunction({name:"munna",tech:"web dev"})
const student2=addCourseToFunction({name:"jahid",tech:"frontend dev"})


    //
}