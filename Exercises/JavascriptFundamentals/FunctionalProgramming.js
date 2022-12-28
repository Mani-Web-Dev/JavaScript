// functional prgramming example


// The below example is using traditional approach

/*

var myArr = [1, 2, 3];

var outputArray = [];

for (i = 0; i < myArr.length; i++) {
    outputArray.push(myArr[i] * 2);
}

console.log(outputArray)

*/

// The below approach is using functional programming

var myArr = [1, 2, 3];

function mapForEach(arr, fn) {

    var outputArr = [];

    for (var i = 0; i < arr.length; i++) {
        outputArr.push(
            fn(arr[i])
        )
    }
    return outputArr;
}

var newArr2 = mapForEach(myArr, function (item) {
    return item * 55;
})

console.log(newArr2)


var newArr3 = mapForEach(myArr, function (item) {
    return item > 2;
})

console.log(newArr3);


var checkPastLimit = function (limiter, item) {
    return item > limiter
}

var newArr4 = mapForEach(myArr, checkPastLimit.bind(this, 1));

console.log(newArr4)


var checkPastLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter)
}

var newArr5 = mapForEach(myArr, checkPastLimitSimplified(2))
console.log(newArr5)

