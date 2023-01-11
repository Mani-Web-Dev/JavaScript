var todoForm = document.querySelector("#todoForm");
var textInput = document.querySelector("#textInput");
var listData = document.querySelector("#listData");
var noData = document.querySelector(".no-data");

// On submitting the form


var getLatestData = JSON.parse(localStorage.getItem("todoListData"));

if (getLatestData) {
    console.log("Data Present in the local storage");


    console.log(getLatestData)

    localStorage.setItem("todoListData", JSON.stringify(data));

    console.log(data)

} else {
    var todoListData = [];
    localStorage.setItem("todoListData", JSON.stringify(todoListData));
    console.log("Local storage created");
}

todoForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // todoListData.push(textInput.value);

    // getLatestData.map(function (item) {
    //     var listItem = document.createElement("li");
    //     listItem.className = "list-item";
    //     listItem.innerText = item;
    // })


    // var editButton = document.createElement("button");
    // editButton.className = "list-button edit";
    // editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit';

    // var deleteButton = document.createElement("button");
    // deleteButton.className = "list-button delete";
    // deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i> Delete';


    // listItem.innerHTML = `
    // <span>
    //     <span class="index">
    //     ${function () {
    //         console.log("listItemCount")
    //     }()}
    //     </span>
    //     ${textInput.value}
    // </span>`;
    // listItem.appendChild(editButton)
    // listItem.appendChild(deleteButton)

    // listData.appendChild(listItem)

    textInput.value = '';
});




// todoForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(textInput.value);

//     var listItem = document.createElement("li");

//     var editButton = document.createElement("button");
//     editButton.className = "list-button edit";
//     editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit';

//     var deleteButton = document.createElement("button");
//     deleteButton.className = "list-button delete";
//     deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i> Delete';

//     listItem.className = "list-item";
//     listItem.id = "item-" + listItemCount;
//     listItem.innerHTML = `
//     <span>
//         <span class="index">
//         ${function () {
//             console.log("listItemCount")
//         }()}
//         </span>
//         ${textInput.value}
//     </span>`;
//     listItem.appendChild(editButton)
//     listItem.appendChild(deleteButton)

//     listData.appendChild(listItem)
//     textInput.value = "";

// })
