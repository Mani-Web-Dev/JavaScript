
function pattern(num) {
    var temp = "";
    for (var i = 0; i < num; i++) {
        temp += "*";
    }
    for (var j = 0; j < num; j++) {
        console.log(temp)
    }
}
pattern(3)