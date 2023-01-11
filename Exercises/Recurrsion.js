

let arr = [2,
    [
        7, 8,
        [4]
    ],
    [5,
        [
            [3],
            7
        ]
    ],
    9,
    [5]
]

let result = []  //output [1,2,3,4,5,6,7,8]

let arrFunction = (arr) => {
    for (a of arr) {
        if (typeof (a) === "number") {
            result.push(a)
        }
        else if (typeof (a) === "object") {
            arrFunction(a)
        }
    }
}
arrFunction(arr)
console.log(result)
console.log(arr)


var arr1 = [1, 2, 3, 4];

var obj = { ...arr1 }

console.log(obj);