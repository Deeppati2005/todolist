const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (!inputBox.value.trim()) {
    alert("NO DATA FOUND");
  } else {
    let listItem = document.createElement("li");
    listItem.textContent = inputBox.value;
    listContainer.appendChild(listItem);
    let span = document.createElement("span");
    span.textContent = "X";
    listItem.appendChild(span);

    inputBox.value = "";
  }

  saveDataLocal();
}


function removeTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveDataLocal();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveDataLocal();
  }
}

function enterKey(event) {
  if (event.key == "Enter") {
    addTask();
  }
}


function saveDataLocal() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getDataLocal() {
  listContainer.innerHTML = localStorage.getItem("data");
}

addBtn.addEventListener("click", addTask);
listContainer.addEventListener("click", removeTask);
inputBox.addEventListener("keypress", enterKey);

getDataLocal();
