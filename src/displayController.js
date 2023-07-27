import listItem from "./list-item";
import todoItem from "./todo-item";

const displayController = (() => {
    const cache = cacheDOM();
    let currentDisplayedItem = undefined;

    addListeners(cache);

    return {
        cache,
        currentDisplayedItem,
        openTaskCard
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
    obj.addNewTaskButton.addEventListener("click", openTaskCard.bind(null, obj, undefined));
    obj.taskDeleteButton.addEventListener("click", closeTaskCard.bind(null, obj));
    obj.taskSaveChangeButton.addEventListener("click", createNewListItem.bind(null, obj));
}

function openTaskCard(obj, item) {
    clearTaskCard(obj);
    
    obj.newTaskCard.style.display = "flex";

    if(item !== undefined) {
        loadItemToCard(obj, item);
        displayController.currentDisplayedItem = item;
    }
}

function clearTaskCard(obj) {
    obj.taskTitleField.value = "";
    obj.taskDescriptionField.value = "";
    obj.taskListField.value = "";
    obj.taskDateField.value = "";

    displayController.currentDisplayedItem = undefined;
}

function loadItemToCard(obj, item) {
    obj.taskTitleField.value = item.getTitle();
    obj.taskDescriptionField.value = item.getDescription();
}

function closeTaskCard(obj) {
    if(displayController.currentDisplayedItem != undefined) {
        deleteOpenedTask();
    }

    obj.newTaskCard.style.display = "none";
    displayController.currentDisplayedItem = undefined;
}

function deleteOpenedTask() {
    let target = findOpenedItem(displayController.currentDisplayedItem);

    displayController.cache.currentList.removeChild(target);
}

function findOpenedItem(item) {
    let allTasks = document.querySelectorAll(".list-item");

    return Array.from(allTasks).find(curr => curr.dataset.item == item);
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
