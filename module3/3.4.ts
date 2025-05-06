{
    //
    // guard instance of 
    class Animal{
        name:string
        species:string;

        constructor(name:string,species:string){
            this.name=name
            this.species=species
        }
        makeSound(){
            console.log("i am making sound ")
        }
      
    }

    class Dog extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeBurk(){
            console.log("dog is barkking")
        }
    }
    class Cat extends Animal{
        constructor(name:string,species:string){
            super(name,species)
        }
        makeMeow(){
            console.log("cat is meow")
        }
    }
    
//-------------->instance of
const isDog=(animal:Animal): animal is Dog=>{
    return animal instanceof  Dog
}
const isCat=(animal:Animal):animal is Cat=>{
    return animal instanceof  Cat
}
const getAnimal=(animal:Animal)=>{
    
    if(isDog(animal)){
        animal.makeBurk()
    } else if(isCat(animal)){
        animal.makeMeow()
    }else{animal.makeSound()}
}

    const dog= new Dog("kallu","dog")
    const cat= new Cat("billu","cat")

getAnimal(cat)

    //
}