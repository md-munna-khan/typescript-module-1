{
    //
    // statics
    class Counter{
      static  Count:number=0
       static increment(){
            return Counter.Count= Counter.Count + 1
        }
       static decrement(){
            return Counter.Count= Counter.Count - 1
        }
    }

// const instance1= new Counter()
console.log(Counter.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())
// const instance2= new Counter()
console.log(Counter.increment())
// console.log(instance2.increment())
// console.log(instance2.increment())
    //
}