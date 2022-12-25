
// Closures example buildFunctions program


function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
            // this is going to return 3 beacuse functions are just getiing pushed inside the arr but not invoked
        })
    }

    return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

