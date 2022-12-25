// Closure example using a function


function greet(whattosay) {
    return function (name) {
        return whattosay + " " + name;

        // even if the whattosay variable is not declared within the same function it executes, using scope chain the inner function the whattosay variable in its outer reference and finds it
    }
}

var sayHi = greet("Hello");

console.log(sayHi("Mani"))