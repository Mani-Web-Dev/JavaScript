//  Functional Composition

// traditional way
let input = "    Javascript    ";
let output = "<div>" + input.trim() + "</div>";


// using functional programming technique



const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`

var result = wrapInDiv(trim(input));
console.log(result)