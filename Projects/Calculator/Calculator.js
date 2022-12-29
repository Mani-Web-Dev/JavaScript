

var buttons = document.querySelectorAll(".button");
var input = document.querySelector(".calc-input");
var output = document.querySelector(".calc-output");
var ce = document.querySelector(".CE");
var backspace = document.querySelector(".backspace");
var equals = document.querySelector(".equals");


for (button of buttons) {
    button.addEventListener("click", (event) => {
        event.target.className === "button" ?
            input.innerHTML += event.target.innerHTML :
            null;
    });
}
ce.addEventListener("click", () => {
    input.innerHTML = "";
    output.value = ""
}
);
backspace.addEventListener("click", () => {
    var strArray = input.innerHTML.split("");
    strArray.pop();
    input.innerHTML = strArray.join("");
})

equals.addEventListener("click", () => {
    var result = eval(input.innerHTML);
    output.value = result;
})