{
    //
    // Generic interface
    interface Developer<T,X=null>{
        name:string,
        computer:{
            brand:string,
            mouse:"a4tech",
            keyboard?:string
        }
        smartWatch:T,
    bike?:X
    }

    type Watch={
        brand:string,
        isNew:boolean,
        shop:string
    }


    interface Watch1{
        brand:string,
        isNew:boolean,
        shop:string
    }

const poorDeveloper:Developer<Watch1>={
    name:"munna",
    computer:{
        brand:"linux",
        mouse:"a4tech"
    },
    smartWatch:{
brand:"apple",
isNew:true,
shop:"dhaka"
    }
}
type Yamaha={
    model:string,
    price:number
}

const richDeveloper:Developer<Watch,Yamaha>={
    name:"munna",
    computer:{
        brand:"linux",
        mouse:"a4tech"
    },
    smartWatch:{
brand:"apple",
isNew:true,
shop:"dhaka"
    },
    bike:{
model:"yamaha",
price:2345
    }
}





    //
}