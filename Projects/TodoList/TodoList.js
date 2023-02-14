var TodoForm = document.querySelector("#TodoForm");
var TextInput = document.querySelector("#TextInput");
var ListData = document.querySelector("#AllListData");
var UnderProgressData = document.querySelector("#UnderProgressData");
var CompletedData = document.querySelector("#CompletedData");
var NoData = document.querySelector("#NoData");
var JsonPreview = document.querySelector("#JsonPreview");
var Status = document.querySelector("#Status");

function openTodo(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

Status.style.visibility = "hidden";

TextInput.focus();

// On submitting the form

// get the to-do list data from local storage or create an empty array if it's not present
var localStorageArray = JSON.parse(localStorage.getItem("todoListData")) || localStorage.setItem("todoListData", JSON.stringify([]));
var underProgress = JSON.parse(localStorage.getItem("underProgress")) || localStorage.setItem("underProgress", JSON.stringify([]));
var completed = JSON.parse(localStorage.getItem("completed")) || localStorage.setItem("completed", JSON.stringify([]));


// Get the latest to-do list data
var getData = JSON.parse(localStorage.getItem("todoListData"));


// Function to create an element for each item in the to-do list
function createElement(arr, status) {
    arr.forEach((item) => {

        var listNode = document.createElement("li");
        var deleteButton = document.createElement("button");
        var editButton = document.createElement("button");

        deleteButton.innerText = "Delete";
        deleteButton.className = "bg-red-500 text-white p-2 rounded-full hover:bg-red-600 ml-1";

        editButton.innerText = "Edit";
        editButton.className = "bg-blue-500 text-white p-2 rounded-full hover:bg-blue-900 ml-auto";

        // Event listener for delete button
        deleteButton.addEventListener("click", () => {
            var deletedArray = getData.filter(listItem => listItem.id !== item.id);
            console.log(deletedArray);
            localStorage.setItem("todoListData", JSON.stringify(deletedArray));

            var confirm = window.confirm("Are you sure u want to delete this todo?");
            confirm ? window.location.reload() : null;
        });

        // Event listener for edit button
        editButton.addEventListener("click", () => {
            Status.style.visibility = "visible";
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

            // Event listener for save button
            saveButton.addEventListener("click", () => {
                var index = arr.indexOf(item);
                getData[index].taskItem = editableInput.value;
                getData[index].status = Status.value;

                localStorage.setItem("todoListData", JSON.stringify(getData));

                console.log(getData[index]);

                var completedData = [];
                if (getData[index].status === "Completed") {
                    completedData.push(getData[index]);
                    localStorage.setItem("completed", JSON.stringify(completedData));
                }

                var inProgressData = [];
                if (getData[index].status === "Under Progress") {
                    inProgressData.push(getData[index]);
                    localStorage.setItem("underProgress", JSON.stringify(inProgressData));
                }
                var confirm = window.confirm("Are you sure u want to edit this todo?")
                confirm ? window.location.reload() : editableInput.focus();
            });

        });

        var index = arr.indexOf(item) + 1;

        listNode.innerText = index + ") " + item.taskItem;
        listNode.className = "border border-gray-400 p-2 my-2 flex items-center";


        ListData.appendChild(listNode)
        listNode.appendChild(editButton);
        listNode.appendChild(deleteButton);

        // status === "alltasks" ?
        //      :
        //     status === "underprogress" ?
        //         UnderProgressData.appendChild(listNode) :
        //         status === "completed" ?
        //             completed.appendChild(listNode) : null


    })
}




var putData;

var getData;

getData === null ? putData = [] : putData = [...getData];


var getLatestData = createElement.bind(this, getData);
// var getUnderProgressData = createElement.bind(this, underProgress);
// var getCompletedData = createElement.bind(this, completed);


function noData(targetNode, description) {
    var noData = document.createElement("p");
    noData.textContent = description;
    noData.className = "border border-gray-400 p-3 mt-5";
    targetNode.appendChild(noData);
}

getData.length === 0 ? noData(ListData, "You have not created any tasks yet!") : getLatestData("alltasks");
// underProgress.length === 0 ? noData(UnderProgressData, "No tasks are under progress") : getLatestData("underprogress");
// completed.length === 0 ? noData(CompletedData, "You have not completed any tasks yet!") : getLatestData("completed");



JsonPreview.innerText = localStorage.getItem("todoListData");

TodoForm.addEventListener("submit", (event) => {

    // event.preventDefault();
    console.log(putData);

    if (TextInput.value === "") {
        alert("Please enter some value");
    } else {
        putData.push({
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            taskItem: TextInput.value,
            status: Status.value,
        });
        localStorage.setItem("todoListData", JSON.stringify(putData));
    }


    TextInput.value = "";
    JsonPreview.innerText = localStorage.getItem("todoListData");
});





