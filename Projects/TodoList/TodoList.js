var todoForm = document.querySelector("#todoForm");
var textInput = document.querySelector("#textInput");
var listData = document.querySelector("#listData");
var noData = document.querySelector(".no-data");


// On submitting the form

var listArray = ["item 1", "item 2", "item 3", "item 4", "item 5"];
var underProgress = [];
var completed = [];


function displayData(arr) {
    arr.map(function (item, index) {

        var li = document.createElement("li");
        li.id = "list-item" + index;

        var span = document.createElement('span');
        span.textContent = index + 1 + ") " + item;

        li.appendChild(span);
        listData.appendChild(li);

        var editButton = document.createElement("button");
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit`;
        editButton.className = "list-button edit";

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i> Delete`;
        deleteButton.className = "list-button delete";

        li.appendChild(editButton);
        li.appendChild(deleteButton);
    })
}

displayData(listArray);


function createData(arr) {
    arr.push("item 6");
    return arr;
}

createData(listArray);

console.log(listArray);