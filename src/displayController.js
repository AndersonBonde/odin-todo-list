import listItem from "./list-item";
import todoItem from "./todo-item";
import events from "./events";

const displayController = (() => {
    const cache = cacheDOM();
    let currentDisplayedItemId = undefined;

    addListeners(cache);
    
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
        obj.addNewTaskButton.addEventListener("click", openCleanTaskCard.bind(null, obj));
        obj.taskDeleteButton.addEventListener("click", closeTaskCard.bind(null, obj));
        obj.taskSaveChangeButton.addEventListener("click", handleSaveChange.bind(null, obj));

        events.on("viewItem", openTaskCardWithInfo.bind(null, obj));
        events.on("deleteItem", deleteTask);
    }
    
    function openCleanTaskCard(obj) {
        clearTaskCard(obj);
        
        obj.newTaskCard.style.display = "flex";
    }
    
    function openTaskCardWithInfo(obj, id, item) {
        clearTaskCard(obj);
        
        obj.newTaskCard.style.display = "flex";
    
        loadItemToCard(obj, item);
        displayController.currentDisplayedItemId = id;
    }
    
    function clearTaskCard(obj) {
        obj.taskTitleField.value = "";
        obj.taskDescriptionField.value = "";
        obj.taskListField.value = "";
        obj.taskDateField.value = "";
    
        displayController.currentDisplayedItemId = undefined;
    }
    
    function loadItemToCard(obj, item) {
        obj.taskTitleField.value = item.getTitle();
        obj.taskDescriptionField.value = item.getDescription();
    }
    
    function closeTaskCard(obj) {
        if(displayController.currentDisplayedItemId != undefined) {
            deleteOpenedTask();
        }
    
        obj.newTaskCard.style.display = "none";
        displayController.currentDisplayedItemId = undefined;
    }

    function deleteTask(id) {
        let target = findOpenedItem(id);

        displayController.cache.currentList.removeChild(target);
    }
    
    function deleteOpenedTask() {
        let target = findOpenedItem();
    
        displayController.cache.currentList.removeChild(target);
    }
    
    function findOpenedItem(id) {
        if(id == undefined) {
            id = displayController.currentDisplayedItemId;
        }
        let allTasks = document.querySelectorAll(".list-item");
    
        return Array.from(allTasks).find(curr => curr.dataset.id == id);
    }
    
    function handleSaveChange(obj) {
        if(displayController.currentDisplayedItemId != undefined) {
            modifyCurrentItem();
        } else {
            createNewListItem(obj);
        }
    }

    function modifyCurrentItem() {
        let target = findOpenedItem();
        let item = target.dataset.item;

        console.log(item.getDescription());
    }
    
    function createNewListItem(obj) {
        let newTitle = obj.taskTitleField.value;
        let newDesc = obj.taskDescriptionField.value;
    
        if(newTitle != "") {
            let newItem = todoItem(newTitle, newDesc);
            let newListItem = listItem(newItem);
        
            obj.currentList.appendChild(newListItem);
        }
    
        closeTaskCard(obj);
    }

    return {
        cache,
        currentDisplayedItemId,
        openTaskCardWithInfo
    }
})();

export default displayController;

// Initial page load;
displayController.cache.newTaskCard.style.display = "none";
