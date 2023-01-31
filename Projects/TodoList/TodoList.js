var TodoForm = document.querySelector("#TodoForm");
var TextInput = document.querySelector("#TextInput");
var ListData = document.querySelector("#ListData");
var NoData = document.querySelector("#NoData");
var JsonPreview = document.querySelector("#JsonPreview");


// On submitting the form


var localStorageArray = JSON.parse(localStorage.getItem("todoListData"));

if (localStorageArray) {
    console.log("data not present");
    localStorage.setItem("todoListData", [])
}

var getData = localStorageArray;

// function createElement(arr) {
//     arr.map((item) => {
//         var listNode = document.createElement("li");
//         var deleteButton = document.createElement("button");
//         deleteButton.innerText = "Delete";
//         deleteButton.className = "bg-red-500 text-white p-2 rounded-full hover:bg-red-600 ml-auto";
//         deleteButton.addEventListener("click", () => {
//             console.log(item);
//         })
//         listNode.innerText = item.id + ") " + item.taskItem;
//         listNode.className = "border border-gray-400 p-2 my-2 flex items-center";
//         ListData.appendChild(listNode);
//         listNode.appendChild(deleteButton);
//     })
// }
// createElement(getData);

var getData = localStorageArray;

var putData;

getData === null ? putData = [] : putData = [...getData]


JsonPreview.innerText = localStorage.getItem("todoListData");


TodoForm.addEventListener("submit", (event) => {

    event.preventDefault();


    putData.push({
        id: putData.length + 1,
        taskItem: TextInput.value
    });


    localStorage.setItem("todoListData", JSON.stringify(putData));

    TextInput.value = "";
    JsonPreview.innerText = localStorage.getItem("todoListData");
});






