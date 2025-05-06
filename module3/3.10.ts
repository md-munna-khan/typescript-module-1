{
    //
    // access modifiers and encapsulation
    class BankAccount{
       readonly id:number
        name:string
       protected balance:number
      private nid:number



        constructor(id:number ,name:string,balance:number,nid:number){
            this.id=id
            this.name=name
            this.balance=balance
            this.nid=nid

        }

        addDeposite(amount:number){
this.balance=this.balance + amount
        }

        getBalace(){
            return this.balance
        }
    }

    const goribMaush= new BankAccount(34,"gorib",400,45)
   goribMaush.addDeposite(454)
   goribMaush.getBalace()

   const balance=goribMaush.getBalace()
    console.log(balance)

    //
}