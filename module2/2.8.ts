{
    //
    type Todo={
id:number,
title:string,
completed:boolean,
userId:number
    }
const getTodo=async():Promise<Todo> =>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data= await response.json()
    return data
}
getTodo()

// asynchronous promise
type Something={something:string}
const createPromise=():Promise<Something>=>{
    return new Promise <Something>((resolve,reject)=>{
        const data:Something={something:"wow good news"}
        if(data){
            resolve(data)
        }else{
            reject("data loading is failed")
        }
    })
}

// calling create promise function
const showData=async () :Promise<Something>=>{
    const data :Something=await createPromise()
  return data
 
}
const logData= async()=>{
    const data=await showData()
    console.log(data)
}
logData()
    //
}