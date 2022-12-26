// function currying :

// Creating a copy of function but with some preset parameters

// This is done using bind and this


function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5, 10));
// even if we pass 3 agruments it wont accept, because the a is already set

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(5));

// this keyword that is passed in the bind method is of no use
// 

