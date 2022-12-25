// IIFE [Immediately invoked function expression] is a function expression
// that is immediately invoked after a function is created

//  Examples of IIFE s

// It is always a good practice to encapsulate the functions
// So it is not defined globally


// function with a function name
(function greet(name) {
    console.log("Hi " + name);
}("Mani"));


// assigning anonymous function to a variable;

var greet = function (name) {
    console.log("Hi " + name);
}("Mani");



// We can keep it as a standalone anonymous function

(function (name) {
    console.log("Hi " + name);
}("Mani"));


(3 + 2);