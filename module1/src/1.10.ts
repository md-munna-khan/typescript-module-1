{
    //

// union types (|)

// type FrontendDeveloper= 'fakibazDev'| "goodDev"
// type FullStackDeveloper= 'Mern Dev'| "goodDev"
// type Developer = FrontendDeveloper | FullStackDeveloper

// const newDeveloper:FrontendDeveloper= 'fakibazDev'

// type User={
//     name:string;
//     email?:string;
//     gender:"male"|"female";
//     bloodGroup:'A+'|"B+"|"AB+"
// }
// //

// const person:User={
// name:"munna",
// gender:"male",
// bloodGroup:"B+"
// }




// intersection types (&)
type FrontendDeveloper={
    skills:string[];
    roll1:"Frontend Developer"

}
type BackendDeveloper={
    skills:string[];
    roll2:"Backend Developer"

}

type FullStackDeveloper= FrontendDeveloper & BackendDeveloper

const fullStackDeveloper:FullStackDeveloper={
    skills:["html","css","js"],
    roll1:"Frontend Developer",
    roll2:"Backend Developer"
}
}