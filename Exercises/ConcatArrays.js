function mergeArrays(...args) {
    var resultArray = [];
    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            resultArray.push(args[i][j]);
        }
    }
    return resultArray;
}

var output = mergeArrays([1, 6], [2, 5], [3, 9], [4, 50, 50]);
console.log(output);

