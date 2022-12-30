var todoForm = document.querySelector("#todoForm");
var textInput = document.querySelector("#textInput");
var listData = document.querySelector("#listData");
var noData = document.querySelector(".no-data");

function listItemHTML(task, id) {
    return `
        <li id="list-item-${id + 1}">
            <span><span class="index">${id + 1}. </span>${task}</span>
            <button class="list-button edit" onclick=""><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            <button class="list-button delete" onclick=""><i class="fa-solid fa-trash-can"></i> Delete</button>
        </li>
        `
}


// On submitting the form

var inputVal;

textInput.addEventListener("change", (e) => {
    inputVal = e.target.value;
});







todoForm.addEventListener("submit", (event) => {
    event.preventDefault();


    localStorage.setItem("todoList", function () {
        return inputVal;
    }());

    console.log(todoList)

    textInput.value = "";
})




// Reading the array object form the local storage database

function displayData() {
    if (todoList.length === 0 || todoList[0] == "") {
        listData.innerHTML = `<p class="no-data">You haven't created any tasks yet</p>`
    } else {
        todoList.map(function (item, index) {
            listData.innerHTML += listItemHTML(item, index);
        })
    }
}
displayData();


function createData() {
    console.log("createData");
}
createData();


function readData() {
    console.log("readData");
}
readData();


function deleteData() {
    console.log("deleteData");
}
deleteData();




