{
    //
// utility
// pick mane tule niye asha\
type person={
    name:string
    age:number
    email?:string
    contact:number
}

type Name= Pick<person,"name"|"age">

/// omit
type Contact= Omit<person,"name"|'age'>

// Required
type personRequired=Required<person>
// partial
type personPartial=Partial<person>
    //

    // ReadOnly
    type readOnlyPerson=Readonly<person>
    const man:readOnlyPerson={
        name:"rofik",
        age:34,
        contact:345
    }
// man.name='jahid' name ar change kora jabe na

// Record
type MyObj=Record<string,string|number>
// type MyObj={
//     a:string
//     b:string
// }
const emptyObj:Record<string,unknown>={}
const myobj:MyObj={
    a:"fdg",
    b:"fg",
    c:"456",
    d:544
}
    //
}