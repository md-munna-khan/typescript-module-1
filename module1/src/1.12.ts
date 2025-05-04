{
    //

    // nullable types
const searchName=(value:string |null)=>{
    if(value){
        console.log("searching")
    }else{
        console.log("there is nothing")
    }
}
// searchName(null)
    //
    // unknown type
    const getSpeedMeterPerSecond=(value:unknown)=>{
        if(typeof value === "number"){
            const convertedSped= (value*1000)/3600;
            console.log(` the speed is ${convertedSped}`)
        }
       else if(typeof value === "string"){
            const [result,unit] = value.split (' ')
            const convertedSpeed=(parseFloat (result)*1000/3600);
            console.log(` the speed is ${convertedSpeed}`)
          
        }
        else{
            console.log("wrong input")
        }
        
    }
    getSpeedMeterPerSecond(`1000 kmh-1`)

    // never type
    const throwError=(msg:string):never=>{
        throw new Error(msg); 
    }
    throwError('error show')
    //
}