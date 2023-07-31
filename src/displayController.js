import listItem from "./list-item";
import todoItem from "./todo-item";
import list from "./list";
import events from "./events";

const displayController = (() => {
    const cache = cacheDOM();
    let _currentDisplayedItemId = undefined;
    let _currentList = undefined;
    let _allLists = [];

    addListeners();

    (function initialPageLoad() {
        cache.newTaskCard.style.display = "none";
        _currentList = list("To Do");
        _allLists.push(_currentList);
        populateNavBarList();

        // Placeholder for test
        let newItem = todoItem("Placeholder", "Description for the placeholder task.");
        let newListItem = listItem(newItem);
        _currentList.items.push(newListItem);
        cache.currentList.appendChild(newListItem.container);
    })();
    
    function cacheDOM() {
        const obj = {};
    
        obj.projectsList = document.querySelector(".projects-list");
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

        removeTaskFromList(target);

        cache.currentList.removeChild(target);
    }
    
    function deleteOpenedTask() {
        let target = findOpenedItem();

        removeTaskFromList(target);
        
        cache.currentList.removeChild(target);
    }

    function removeTaskFromList(item) {
        events.emit("listItemDeleted", item.dataset.id);
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
        createNewListItem();
    }
    
    function createNewListItem() {
        let newTitle = cache.taskTitleField.value;
        let newDesc = cache.taskDescriptionField.value;
    
        if(newTitle != "") {
            let newItem = todoItem(newTitle, newDesc);
            let newListItem = listItem(newItem);

            cache.currentList.appendChild(newListItem.container);

            events.emit("listItemCreated", newListItem);
        }
    
        closeTaskCard();
    }

    function populateNavBarList() {
        _allLists.forEach(curr => {
            let newLi = document.createElement("li");
            let newA = document.createElement("a");

            newLi.appendChild(newA);

            newA.classList.add("to-do-list");
            newA.href = "#";
            newA.textContent = curr.getName();

            cache.projectsList.appendChild(newLi);
        })
    }
})();

export default displayController;