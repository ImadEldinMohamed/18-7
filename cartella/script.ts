class SonAccount {
  BalanceInit:number
constructor(dep:number,prel:number){
this.BalanceInit=0
this.oneDeposit(dep)
this.oneWithDrow(prel)
}
oneDeposit(deposito:number){
  this.BalanceInit=this.BalanceInit+ deposito
}
oneWithDrow(prelievo:number){
    this.BalanceInit=this.BalanceInit-prelievo
}


}


 class MotherAccount extends SonAccount{
  constructor(dep:number,prel:number){
    super(dep,prel)
   this.addInterest()

   

  }
  addInterest(){
    this.BalanceInit=this.BalanceInit *0.1 +this.BalanceInit
    console.log(this.BalanceInit)
    
  }
  
 }


 let figlio=new SonAccount(50,20)
 console.log(figlio)
 let madre=new MotherAccount(50,20)
 console.log(madre)
 