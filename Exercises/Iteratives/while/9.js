// Write a program Factors of 24 using while loop
//     (Factors of 24 are 1, , 3, 4, 6, 12, 24)

var i = 1;

while (i <= 24) {
    if (24 % i === 0) {
        console.log(i);
    }
    i++;
}