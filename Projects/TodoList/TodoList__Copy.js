var todoForm = document.querySelector("#todoForm");
var textInput = document.querySelector("#textInput");
var listData = document.querySelector("#listData");
var noData = document.querySelector(".no-data");


// On submitting the form

var todoList = [];

function displayData() {
    if (todoList.length === 0) {
        noData.style.display = "block";
    } else {
        noData.style.display = "none";
        for (var i = 0; i < todoList.length; i++)
            listData.innerHTML += `<li>
            <span><span class="index">${i + 1}. </span>${todoList[i]}</span>
            <button class="list-button edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            <button class="list-button delete"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </li>`
    }
}

displayData();

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todoList.push(textInput.value);
    noData.style.display = "none";
    textInput.value = "";
    listData.innerHTML += `<li>
            <span><span class="index">${todoList.length - 1}. </span>${todoList[todoList.length - 1]}</span>
            <button class="list-button edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
            <button class="list-button delete"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </li>`
});






