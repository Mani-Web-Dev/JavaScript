// Push 100 random numbers into an array without repeating the number

var array = [];


for (var i = 1; i <= 100; i++) {
    var digit = Math.floor(Math.random() * 10);
    var randomNumber = Math.floor(Math.random() * 10) * digit;
    if (array.indexOf(randomNumber) === -1) {
        array.push(randomNumber);
    }
}

console.log(array);



let n = 10;
let arr = []
while (arr.length < n) {
    Random = Math.floor(Math.random() * n);
    // console.log(Random);
    let indexValue = arr.indexOf(Random);
    if (indexValue == -1) {
        arr.push(Random);
    }
}
console.log(arr);