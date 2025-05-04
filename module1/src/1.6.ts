{
    // learning function
//1 normal function
// 2 arrow Function

function add (num1:number,num2:number):number{
    return num1 + num2;
}
add(2,5)

// arrow function
const addArrow = (num1:number,num2:number) :number =>num1 + num2

//  object --> function ---> method

const poorUser = {
    name: "munna",
    balance:30,
    addBalance(balance:number) :string{
        return  `this is my new : ${this.balance + balance}`
    }
}

const arr :number[] = [2,5,7]
const newArray = arr.map((element:number): number=>element*element);
}