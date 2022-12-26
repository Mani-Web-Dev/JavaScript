// Closures with IIFE Methods


// Closures example buildFunctions program


function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push((function (j) {
            console.log(j);
        }(i)));
    }

    return arr;
}


var fs = buildFunctions();

// here we dont need to call the fs function because it is IIFE

