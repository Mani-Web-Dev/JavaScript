var todoForm = document.querySelector("#todoForm");
var textInput = document.querySelector("#textInput");
var listData = document.querySelector("#listData");
var noData = document.querySelector(".no-data");


// On submitting the form



localStorage.setItem("todoList", [])
var todoList = localStorage.todoList.split("");


// Reading the array object form the local storage database

function readData() {
    console.log("function working")
}

console.log(todoList);




