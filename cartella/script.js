"use strict";
class SonAccount {
    constructor(dep, prel) {
        this.BalanceInit = 0;
        this.oneDeposit(dep);
        this.oneWithDrow(prel);
    }
    oneDeposit(deposito) {
        this.BalanceInit = this.BalanceInit + deposito;
    }
    oneWithDrow(prelievo) {
        this.BalanceInit = this.BalanceInit - prelievo;
    }
}
class MotherAccount extends SonAccount {
    constructor(dep, prel) {
        super(dep, prel);
        this.addInterest();
    }
    addInterest() {
        this.BalanceInit = this.BalanceInit * 0.1 + this.BalanceInit;
        console.log(this.BalanceInit);
    }
}
let figlio = new SonAccount(50, 20);
console.log(figlio);
let madre = new MotherAccount(50, 20);
console.log(madre);
