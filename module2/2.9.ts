{
    //
    // conditional type
    type a1= number
    type b1= boolean

type X =a1 extends null? true:b1 extends undefined? undefined :any
    //

    type Sheikh={
        bike:string,
        car:string,
        ship:string
    }

    // type CheckVehicle <T> = T extends "bike" | "car" | "ship" ? true:false
    type CheckVehicle <T> = T extends keyof Sheikh ? true:false


    type  HasBike=CheckVehicle<"car">
    //
}