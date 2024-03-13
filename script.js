// Selected all html id
const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("addBtn");
const listContainer = document.getElementById("list-container");

// window onload function
window.onload = function () {
  mainFunction();
};

// mainFunction
function mainFunction() {
  // addButton Event
  addButton.addEventListener("click", addButtonFun);

  // inputBox Event
  inputBox.addEventListener("keypress", inputBoxFun);

  // listContainer Event
  listContainer.addEventListener("click", function (e) {
    listContainerFun(e);
  });
}

// addButtonFun function
function addButtonFun() {
  if (inputBox.value === "") {
    alert("Please add your task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
}

//   inputBoxFun function
function inputBoxFun(e) {
  if (e.key === "Enter" && inputBox.value === "") {
    alert("Please add your task!");
  } else if (e.key === "Enter") {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
}

//   listContainerFun function
function listContainerFun(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}

// localStorage data
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
