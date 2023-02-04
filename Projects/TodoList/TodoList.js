var TodoForm = document.querySelector("#TodoForm");
var TextInput = document.querySelector("#TextInput");
var ListData = document.querySelector("#ListData");
var NoData = document.querySelector("#NoData");
var JsonPreview = document.querySelector("#JsonPreview");

// On submitting the form

var localStorageArray = JSON.parse(localStorage.getItem("todoListData"));

if (localStorageArray === null) {
    console.log("data not present");
    localStorage.setItem("todoListData", JSON.stringify([]))
}

var getData = localStorageArray;

function createElement(arr) {
    arr.map((item) => {
        var listNode = document.createElement("li");
        var deleteButton = document.createElement("button");
        var editButton = document.createElement("button");

        deleteButton.innerText = "Delete";
        deleteButton.className = "bg-red-500 text-white p-2 rounded-full hover:bg-red-600 ml-1";

        editButton.innerText = "Edit";
        editButton.className = "bg-blue-500 text-white p-2 rounded-full hover:bg-blue-900 ml-auto";

        deleteButton.addEventListener("click", () => {
            var deletedArray = getData.filter(listItem => listItem.id !== item.id)
            console.log(deletedArray);
            localStorage.setItem("todoListData", JSON.stringify(deletedArray));
            alert("Are you sure u want to create this todo?")
            window.location.reload();
        });

        editButton.addEventListener("click", () => {
            console.log("Edit Button Clicked");
            var editableInput = document.createElement("input");
            editableInput.type = "text";
            editableInput.value = item.taskItem;
            editableInput.className = "p-2 border border-gray-500 rounded mr-2 flex-1"
            listNode.innerHTML = "";
            listNode.appendChild(editableInput);

            var saveButton = document.createElement("button");
            saveButton.className = "p-2 bg-blue-600 hover:bg-blue-800 text-white rounded-full";
            saveButton.textContent = "Save";
            listNode.appendChild(saveButton);

            editableInput.focus();

            saveButton.addEventListener("click", () => {
                console.log(item);
                console.log("you have changed: from", item.taskItem, " to ", editableInput.value);
                getData[index].taskItem = editableInput.value;
                console.log(getData);
                localStorage.setItem("todoListData", JSON.stringify(getData));
                alert("Are you sure u want to edit this todo?")
                window.location.reload();
            });

        });

        var index = arr.indexOf(item) + 1;
        listNode.innerText = index + ") " + item.taskItem;
        listNode.className = "border border-gray-400 p-2 my-2 flex items-center";
        ListData.appendChild(listNode);
        listNode.appendChild(editButton);
        listNode.appendChild(deleteButton);
    })
}



var putData;

var getData;

getData === null ? putData = [] : putData = [...getData];


var getLatestData = createElement.bind(this, getData);
getLatestData();

JsonPreview.innerText = localStorage.getItem("todoListData");

TodoForm.addEventListener("submit", (event) => {

    // event.preventDefault();

    putData.push({
        id: putData.length + 1,
        taskItem: TextInput.value
    });

    localStorage.setItem("todoListData", JSON.stringify(putData));


    TextInput.value = "";
    JsonPreview.innerText = localStorage.getItem("todoListData");
});






