// "use strict"; is a string that is an additional feature that tells the JS the process the code in a strict way

/**
 * It can be written two different ways
 * 1) we can write it in the top of a JS file global which tells the JS engine to process the code in a strict manner
 * 2) or as a first line in function {
 *      here it tells to maintain strict module only within the function
 * } 
 * 
 * "use strict" is not usefull in all the circumstances although it might be usefull in some cases
 * because it behaves differntly in different browsers
 */

// "use strict";

var person;
persom = {}
console.log(persom)

function greet() {

    "use strict";
    var english;

    englsh = "Hi Good morning";

    console.log(englsh);
}
greet();