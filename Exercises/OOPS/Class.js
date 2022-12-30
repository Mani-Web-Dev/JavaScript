//  Class is a data type that acts as a blue print or template

// it contains properties and methods

// we can access the methods and properties using member variables

class Account {
    minBalance = 500;

    accountBalance() {
        console.log("Your balance is: 500");
    }

    openAccount() {
        console.log(this.depositAmount += this.minBalance)
    }

    depositAmount(amount) {
        console.log(amount)
    }

    getBal() {

    }
    withdrawalAmount() {

    }
}


var E1 = new Account();
E1.depositAmount(5000)
E1.accountBalance()

console.log(E1);


// to refer inside the class "this" keyword is used

// to refer outside the class the objects are used

// -------------------------------------------------------
// constructor will execute automatically when objects are created

// it is special method

// we can't invoke constructor explicitly







