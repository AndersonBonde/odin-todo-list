import "./style.css";
import todoItem from "./todo-item.js";
import listItem from "./list-item.js";

const addNewTaskButton = document.querySelector("#add-new-task");
addNewTaskButton.addEventListener("click", openNewTaskCard);

const newTaskCard = document.querySelector(".task");
newTaskCard.style.display = "none";


function openNewTaskCard() {
    newTaskCard.style.display = "block";
}