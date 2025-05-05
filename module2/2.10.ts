{
    //
    // mapped type
const arrOfNumber:number[]=[3,4,7]

const arrOfString:string[]=arrOfNumber.map((number) =>{
   return number.toString()
})
console.log(arrOfString)

type AreaNumber={
    height:string,
    width:string
}

type Heigh=AreaNumber["height"] // look up type
// type AreaString={
//     height:string,
//     width:string
// }
type AreaString<T>={
    [Key in keyof T ]:T[Key]
}

const are1:AreaString<{height:string,width:number,roll:number}>={
    height:'345',
    width:345,
    roll:34
}
console.log(are1)
    //

}