{
    //
    // type assertion

    let anything:any;

    anything='next level dev'
    anything=234;
    (anything as number)

    const kgToGm=(value:string|number)=>{
        if(typeof value === "string"){
            const convertedValue=parseFloat(value)*1000;
            return ` the converted value is ${convertedValue}`
        }
        if( typeof value === "number"){
           return  value*1000
        }
    }

const result1= kgToGm('100') as number
const result2= kgToGm(100) as number

console.log({result1},{result2})

// try catch
type CustomError={
    message:string
}
try{

}catch(error){
    console.log((error as CustomError).message)
}



//
}