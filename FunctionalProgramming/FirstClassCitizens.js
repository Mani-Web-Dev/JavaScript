/**
 * Functions as first class citizens / Or first class functions
 */

// we can treat functions like any other variables

/**
 * Assign it to a variables 
 * Pass as an arguement
 * Return from other functions
 */

// assigning function to a variable

function sayHello() {
    return "Hello World";
}

var fn1 = sayHello;

console.log(fn1());


// passing function as a parameter to another function


function greet(fnmessage) {
    console.log(fnmessage());
}

greet(sayHello);


// Returning a function inside a another function


function greetings() {
    return function () {
        return "Hello Mani, Good Morning";
    }
}

var f1 = greetings();
console.log(f1);

var f2 = f1();
console.log(f2);
