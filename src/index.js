import "./style.css";
import todoItem from "./todo-item.js";
import listItem from "./list-item.js";

const addNewTaskButton = document.querySelector("#add-new-task");
const newTaskCard = document.querySelector(".task");
const currentList = document.querySelector(".current-list");

addNewTaskButton.addEventListener("click", openNewTaskCard);

newTaskCard.style.display = "none";

function openNewTaskCard() {
    // newTaskCard.style.display = "flex";

    addNewTask();
}

function closeNewTaskCard() {
    newTaskCard.style.display = "none";
}

function addNewTask() {
    let item = todoItem("Test Item", "Testing to see if adding a new task is working as intended.");
    console.log(`Item: ${item}`);

    let newListItem = listItem(item);
    console.log(`List Item: ${newListItem}`);

    currentList.appendChild(newListItem);
}