{
    //
    // oop class
    class Animal{
        //-------------> class property
        // public name:string;
        // public species:string;
        // public sound:string;

        //-------------> parameter properties
        constructor ( public name:string,
            public species:string,
            public sound:string){
            // this.name=name
            // this.species=species
            // this.sound=sound
        }
        //-----------------> class method array function akhane kaj korbe na
        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }
const dog = new Animal("badda dog","dog","ghew ghew")
const cat = new Animal("badda billu","cat","mew mew")
cat.makeSound()
    //

}