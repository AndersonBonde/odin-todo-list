import listItem from "./list-item";
import todoItem from "./todo-item";

const displayController = (() => {
    const cache = cacheDOM();

    addListeners(cache);

    return {
        cache
    }
})();


function cacheDOM() {
    const obj = {};

    obj.currentList = document.querySelector(".current-list");
    obj.addNewTaskButton = document.querySelector("#add-new-task");
    obj.newTaskCard = document.querySelector(".task");
    obj.taskTitleField = document.querySelector("#title");
    obj.taskDescriptionField = document.querySelector("#description");
    obj.taskListField = document.querySelector("#list");
    obj.taskDateField = document.querySelector("#due-date");    
    obj.taskDeleteButton = document.querySelector("#delete");
    obj.taskSaveChangeButton = document.querySelector("#save-change");

    return obj;
}

function addListeners(obj) {
    obj.addNewTaskButton.addEventListener("click", openTaskCard.bind(null, obj));
    obj.taskDeleteButton.addEventListener("click", closeTaskCard.bind(null, obj));
    obj.taskSaveChangeButton.addEventListener("click", createNewListItem.bind(null, obj));
}

function openTaskCard(obj) {
    clearTaskCard(obj);
    
    obj.newTaskCard.style.display = "flex";
}

function clearTaskCard(obj) {
    obj.taskTitleField.value = "";
    obj.taskDescriptionField.value = "";
    obj.taskListField.value = "";
    obj.taskDateField.value = "";
}

function closeTaskCard(obj) {
    obj.newTaskCard.style.display = "none";
}

function createNewListItem(obj) {
    let newTitle = obj.taskTitleField.value;
    let newDesc = obj.taskDescriptionField.value;

    if(newTitle != "" && newDesc != "") {
        let newItem = todoItem(newTitle, newDesc);
        let newListItem = listItem(newItem);
    
        obj.currentList.appendChild(newListItem);
    }

    closeTaskCard(obj);
}

export default displayController;

// Initial page load;
displayController.cache.newTaskCard.style.display = "none";

// function addNewTask() {
//     let item = todoItem("Test Item", "Testing to see if adding a new task is working as intended.");

//     let newListItem = listItem(item);

//     currentList.appendChild(newListItem);
// }