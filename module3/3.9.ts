{
    //
    // abstraction : 1 =interface 2 = abstract


    //============ idea ========
    interface Vehicle1{
       startEngine():void
       stopEngine():void
       move():void
    }
    //========== Real implementations==========
class Car1 implements Vehicle1{
    startEngine(): void {
        console.log("i am start engine")
    }
    stopEngine(): void {
        console.log("i am stop engine ")
    }
    move(): void {
        console.log("i am moving")
    }
    test() {
        console.log(" i am testing")
    }
}

const toyotaCar=new Car1()
// toyotaCar.startEngine()
// toyotaCar.stopEngine()
// toyotaCar.move()
// toyotaCar.test()

//=====================abstract================================
 abstract class Car2 {
    abstract startEngine(): void 
  abstract  stopEngine(): void 
  abstract  move(): void 
    test() {
        console.log(" i am testing")
    }
}

class ToyotaCar extends Car2{
    startEngine(): void {
        console.log("car 2 starting")
    }
    stopEngine(): void {
        console.log("car 2 stop")
    }
    move(): void {
        console.log('car 2 moving')
    }
}
const hondaCar=new ToyotaCar()
hondaCar.startEngine()

    //
}