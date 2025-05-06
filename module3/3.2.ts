{
    //
    // oop inheritance 

    class Parent{
        name:string
        age:number
        role:number
constructor(name:string,age:number,role:number){
    this.name=name
    this.age=age
    this.role=role
}
getSleep(Hourse:number){
console.log(` he ${this.name} every night ${Hourse}`)
}
    }
//-----------> students
    class Student extends Parent{
        
constructor(name:string,age:number,role:number){
    super(name,age,role)
}

    }

    const student1=new Student("mr.student",20,1)

    // ---------->teacher
    class Teacher extends Parent{
      
        designation:string
constructor(name:string,age:number,role:number,  designation:string){
super(name,age,role)
    this.designation=designation
}

takeClass(namOfClaa:number){
    console.log(`he everyday take the class almost${namOfClaa}`)
}
    }

    const teacher=new Teacher("mr.student",20,1,"professor")

    //
}