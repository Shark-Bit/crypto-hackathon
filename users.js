class Users {
    constructor(name){
        this.username=name;
        this.balance;
        this.time;
        this.hash;
    }
    updateBalance(money){
        this.balance+=money;
    
    }
    updatetime(time){
        this.time=time;
    }
    updatehash(hash){
        this.hash=hash;
    }
}