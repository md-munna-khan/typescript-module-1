{
    //
    // polymorphism  বহুরূপী

    class Person{
        getSleep(){
            console.log(` i am sleeping everyday 8 hourse`)
        }
    }

    class Student extends Person{
        getSleep(){
            console.log(` i am sleeping everyday 7 hourse`)
        }
    }
    class Developers extends Person{
        getSleep(){
            console.log(` i am sleeping everyday 6 hourse`)
        }
    }
const getSleepingHourse=(param:Person)=>{
  param.getSleep()
}

    const person1=new Person()
    const person2=new Student()
    const person3=new Developers()
    getSleepingHourse(person1)
    getSleepingHourse(person2)
    getSleepingHourse(person3)

    class Shape{
        getArea():number{
            return 0;
        }
    }
    class Circle extends Shape{
        radius:number
        constructor(radius:number){
            super()
            this.radius=radius
        }
getArea(): number {
    return Math.PI * this.radius*this.radius
}
    }

    class Reactangle extends Shape{
        height:number;
        width:number
        constructor( height:number,width:number){
            super()
            this.height=height
            this.width=width
        }
getArea(): number {
    return Math.PI * this.height*this.width
}
    }

    const getShapeArea=(param:Shape)=>{
        console.log(param.getArea())
    }
    const shape1=new Shape()
    const shape2=new Circle(40)
    const shape3=new Reactangle(10,10)

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)
    //
}