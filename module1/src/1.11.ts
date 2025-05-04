{
    //
// ternary || optional chaining || nullish coalescing

const age:number= 15
// ternary
if(age >=18){
    console.log(" adult")
}else{
    console.log('not adult')
}

const isAdult = age >= 18? "adult":"not adult"
// console.log(isAdult)


// nullish coalescing operator

const authenticated= ' ';
const result1=authenticated?? "Guest";
const result2=authenticated?authenticated: "Guest";

// console.log({result1},{result2})

// optional chaining
type User={
    name:string,
    email?:string,
    address:{
        road:string;
        presentAddress?:string;
        permanentAdress:string
    }
}

const user:User={
    name:"munna",
    address:{
        road:"badda 23",
        permanentAdress:"tkg"
    }
}

const presentAddress=user?.address?.presentAddress ??"Dhaka badda"
console.log({presentAddress})
    //
}