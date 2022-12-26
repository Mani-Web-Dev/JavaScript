// A closure is a function having access to the parent scope,
// even after the parent function has closed.

// The phenomenon of closing all the variables that it supposed to have access to is called a closure

// example of a simple closure using a simple variable and function

var a = 10;
var b = 20;

function add() {
    return a + b;
    // even if the a and b are not passed as a parameters, arguments, it is still available inside the function because of its outer reference
}

console.log(add())