var todoForm = document.querySelector("#todoForm");
console.log(todoForm);

var textInput = document.querySelector("#textInput");

var listData = document.querySelector("#listData");

// On submitting the form

var todoList = ["Item 1", "Item2", "Item"]


function displayData() {
    for (listItem of todoList) {
        listData.innerHTML = `
            <li>
                <span>${listItem}</span>
                <button class="list-button edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                <button class="list-button delete"><i class="fa-solid fa-trash-can"></i> Delete</button>
            </li>
        `
    }
}
displayData();


todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    todoList.push(textInput.value);
    textInput.value = "";
    displayData();
});






