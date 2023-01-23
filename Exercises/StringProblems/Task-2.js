// Given 2 arrays arr[1] and arr[], for each element in arr2[] and print the index value,
// if not found print "NA" Assume arr1[] and arr[2] doesn't have duplicate values

var arr1 = ["A", "B", "C", "D"];
var arr2 = ["P", "C", "A", "D", "B"];

for (var i = 0; i <= arr1.length - 1; i++) {
    var indexValue = 0;
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            index = Number(arr2.indexOf(arr2[j]));  
        } else {
            index = "NA";
        }
    }
    console.log(arr1[i], " : ", index);
}



