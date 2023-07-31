import listItem from "./list-item";
import todoItem from "./todo-item";
import events from "./events";

const displayController = (() => {
    const cache = cacheDOM();
    let _currentDisplayedItemId = undefined;

    addListeners();
    
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
    
    function addListeners() {
        cache.addNewTaskButton.addEventListener("click", openCleanTaskCard);
        cache.taskDeleteButton.addEventListener("click", closeTaskCard);
        cache.taskSaveChangeButton.addEventListener("click", handleSaveChange);

        events.on("viewItem", openTaskCardWithInfo);
        events.on("deleteItem", deleteTask);
    }
    
    function openCleanTaskCard() {
        clearTaskCard();
        
        cache.newTaskCard.style.display = "flex";
    }
    
    function openTaskCardWithInfo(id, item) {
        clearTaskCard();
        
        cache.newTaskCard.style.display = "flex";
    
        loadItemToCard(item);
        _currentDisplayedItemId = id;
    }
    
    function clearTaskCard() {
        cache.taskTitleField.value = "";
        cache.taskDescriptionField.value = "";
        cache.taskListField.value = "";
        cache.taskDateField.value = "";
    
        _currentDisplayedItemId = undefined;
    }
    
    function loadItemToCard(item) {
        cache.taskTitleField.value = item.getTitle();
        cache.taskDescriptionField.value = item.getDescription();
    }
    
    function closeTaskCard() {
        if(_currentDisplayedItemId != undefined) {
            deleteOpenedTask();
        }
    
        cache.newTaskCard.style.display = "none";
        _currentDisplayedItemId = undefined;
    }

    function deleteTask(id) {
        let target = findOpenedItem(id);

        cache.currentList.removeChild(target);
    }
    
    function deleteOpenedTask() {
        let target = findOpenedItem();
    
        cache.currentList.removeChild(target);
    }
    
    function findOpenedItem(id) {
        if(id == undefined) {
            id = _currentDisplayedItemId;
        }
        let allTasks = document.querySelectorAll(".list-item");
    
        return Array.from(allTasks).find(curr => curr.dataset.id == id);
    }
    
    function handleSaveChange() {
        if(_currentDisplayedItemId != undefined) {
            modifyCurrentItem();
        } else {
            createNewListItem();
        }
    }

    function modifyCurrentItem() {
        let target = findOpenedItem();
        let item = target.dataset.item;

        console.log(item.getDescription());
    }
    
    function createNewListItem() {
        let newTitle = cache.taskTitleField.value;
        let newDesc = cache.taskDescriptionField.value;
    
        if(newTitle != "") {
            let newItem = todoItem(newTitle, newDesc);
            let newListItem = listItem(newItem);
        
            cache.currentList.appendChild(newListItem);
        }
    
        closeTaskCard();
    }

    return {
        cache
    }
})();

export default displayController;

// Initial page load;
displayController.cache.newTaskCard.style.display = "none";
