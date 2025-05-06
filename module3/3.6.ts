{
    //
    //  getter and setter
    class BankAccount{
       
       readonly id:number
        name:string
        protected _balance:number
      private nid:number



        constructor(id:number ,name:string,balance:number,nid:number){
            this.id=id
            this.name=name
          
            this.nid=nid
            this._balance=balance
        }

//         addDeposite(amount:number){
// this._balance=this._balance + amount
//         }
//=======================>setter
set deposite(amount:number){
this._balance=this._balance + amount
}

//-===================>> using getter
//         getBalace(){
//             return this._balance
//         }
get myBalance(){
    return this._balance
 }
    }

    const goribMaush= new BankAccount(34,"gorib",400,4545646)
//    goribMaush.addDeposite(454)

 goribMaush.deposite=100

//    goribMaush.getBalace()

//    const balance=goribMaush.getBalace()
const goriberBalance= goribMaush.myBalance;// property er moto use korsi
    console.log(goribMaush)

    //
}