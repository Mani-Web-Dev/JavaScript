// in other programming language the classes are just a blueprint to create object
// But in javscript, even if the classes behave the same way as the other programming languages
// still it is technically an object 
// creating object using an object is Class


// Syntactic sugar: 
/*
A different way to type something that doesn't change how it works under the Hood
because, the class does the same that the function constructors do, but with a different syntax
 */


// ES6 class example


class Account {
    acc_id;
    acc_name;
    constructor(id, name) {
        this.acc_id = id;
        this.acc_name = name;
    }
    open_account() {
        console.log("Account Opened Successfully");
    }
}

class SavingsAccount extends Account {
    min_bal = 500;
    acc_amount;
    constructor(id, name, acc_amount) {
        super(id, name);
        this.acc_amount = acc_amount;
    }
    get_Bal() {
        return this.acc_amount - this.min_bal;
    }
}

class CurrentAccount extends Account {
    min_bal = 25000;
    acc_amount;
    acc_type;

    constructor(id, name, acc_amount, acc_type) {
        super(id, name);
        this.acc_amount = acc_amount;
        this.acc_type = acc_type;
    }
    get_Bal() {
        return this.acc_amount - this.min_bal;
    }
}



var sa1 = new SavingsAccount(102, "Gandan", 6000);
console.log(sa1);
sa1.open_account();
sa1.get_Bal();


var ca1 = new CurrentAccount(101, "Mani", 75000, "Premium");
console.log(ca1);
ca1.open_account();
ca1.get_Bal();





