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
        populateTaskListField();

        // Placeholder for test
        let newItem = todoItem("Placeholder", "Description for the placeholder task.", "2023-10-13", [{"Placeholder check list": true}, {"Second item": false}]);
        let newListItem = listItem(newItem);
        _currentList.items.push(newListItem);
        cache.currentList.appendChild(newListItem.container);
    })();
    
    function cacheDOM() {
        const obj = {};
    
        obj.projectsList = document.querySelector(".projects-list");
        obj.currentList = document.querySelector(".current-list");
        obj.addNewListButton = document.querySelector("#add-new-list");
        obj.addNewTaskButton = document.querySelector("#add-new-task");
        obj.newTaskCard = document.querySelector(".task");
        obj.taskTitleField = document.querySelector("#title");
        obj.taskDescriptionField = document.querySelector("#description");
        obj.taskListField = document.querySelector("#list");
        obj.taskDateField = document.querySelector("#due-date");    
        obj.checkList = document.querySelector(".checklist");
        obj.addNewChecklistItemButton = document.querySelector("#new-checklist-item");
        obj.taskDeleteButton = document.querySelector("#delete");
        obj.taskSaveChangeButton = document.querySelector("#save-change");
    
        return obj;
    }
    
    function addListeners() {
        cache.addNewListButton.addEventListener("click", createNewList);
        cache.addNewTaskButton.addEventListener("click", openCleanTaskCard);
        cache.taskDeleteButton.addEventListener("click", closeTaskCard);
        cache.taskSaveChangeButton.addEventListener("click", handleSaveChange);
        cache.addNewChecklistItemButton.addEventListener("click", addNewChecklistItem);

        events.on("viewItem", openTaskCardWithInfo);
        events.on("deleteItem", deleteTask);

        document.addEventListener("keydown", enterKeyToSaveChanges);
        document.addEventListener("keydown", deleteKeyToDeleteOpenTask);
    }
    
    function openCleanTaskCard() {
        clearTaskCard();
        taskCardFieldsSetup();
    }
    
    function openTaskCardWithInfo(id, item) {
        clearTaskCard();
        taskCardFieldsSetup();
        loadItemToCard(item);
        loadChecklistToCard(item);
        
        _currentDisplayedItemId = id;
    }
    
    function clearTaskCard() {
        cache.taskTitleField.value = "";
        cache.taskDescriptionField.value = "";
        cache.taskListField.value = "";
        cache.taskDateField.value = "";

        let allCheckListItems = cache.checkList.querySelectorAll("li");
        allCheckListItems.forEach(curr => {
            cache.checkList.removeChild(curr);
        });
    
        _currentDisplayedItemId = undefined;
    }
    
    function loadItemToCard(item) {
        cache.taskTitleField.value = item.getTitle();
        cache.taskDescriptionField.value = item.getDescription();
        cache.taskDateField.value = item.getDueTime();
    }
    
    function taskCardFieldsSetup() {
        cache.newTaskCard.style.display = "flex";
        cache.taskTitleField.focus();
        cache.taskListField.value = _currentList.getName();
    }

    function loadChecklistToCard(item) {
        clearAllChecklistItems();

        let arr = item.getCheckList();
        
        arr.forEach((curr) => {
            let newLi = document.createElement("li");
            let newInput = document.createElement("input");
            let newLabel = document.createElement("label");

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);

            newInput.type = "checkbox";
            newInput.id = Object.keys(curr)[0];
            newInput.checked = Object.values(curr)[0];
            newLabel.htmlFor = Object.keys(curr)[0];
            newLabel.textContent = Object.keys(curr)[0];

            cache.checkList.insertBefore(newLi, cache.addNewChecklistItemButton);
        })
    }

    function clearAllChecklistItems() {
        let allItems = cache.checkList.querySelectorAll("li");

        allItems.forEach(curr => {
            cache.checkList.removeChild(curr);
        })
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
        let index = _currentList.items.findIndex(curr => curr.id == item.dataset.id);
        _currentList.items.splice(index, 1);
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
        let newDueTime = cache.taskDateField.value;
        let newChecklist = getChecklistFromCard();
    
        if(newTitle != "") {
            let newItem = todoItem(newTitle, newDesc, newDueTime, newChecklist);
            let newListItem = listItem(newItem);

            addNewListItemToSelectedList(newListItem);
        }
    
        closeTaskCard();
    }

    function addNewListItemToSelectedList(listItem) {
        let selectedList = cache.taskListField.value;
        let list = _allLists.find(curr => curr.getName() == selectedList);

        list.items.push(listItem);
        loadCurrentList();
    }

    function getChecklistFromCard() {
        let checklist = [];
        let allItems = cache.checkList.querySelectorAll("li");

        allItems.forEach(curr => {
            let key = curr.querySelector("label").textContent;
            let value = curr.querySelector("input").checked;
            let obj = {};
            obj[key] = value;
            checklist.push(obj);
        })

        return checklist;
    }

    function populateNavBarList() {
        clearNavBar();

        _allLists.forEach(curr => {
            let newLi = document.createElement("li");
            let newA = document.createElement("a");

            newLi.appendChild(newA);
            newLi.classList.add("to-do-list");

            newA.href = "#";
            newA.textContent = curr.getName();
            newA.addEventListener("click", setCurrentList.bind(null, curr.getName()));

            cache.projectsList.appendChild(newLi);
        })
    }

    function clearNavBar() {
        let all = cache.projectsList.querySelectorAll(".to-do-list");

        all.forEach(curr => {
            cache.projectsList.removeChild(curr);
        })
    }

    function setCurrentList(newListName) {
        let toLoad = _allLists.find(curr => curr.getName() == newListName);
        _currentList = toLoad;

        document.querySelector(".list-name").textContent = newListName;

        loadCurrentList();
    }

    function loadCurrentList() {
        clearAllFromCurrentList();

        _currentList.items.forEach(curr => {
            cache.currentList.appendChild(curr.container);
        })
    }

    function clearAllFromCurrentList() {
        let allItems = cache.currentList.querySelectorAll(".list-item");

        allItems.forEach(curr => {
            cache.currentList.removeChild(curr);
        })
    }

    function createNewList() {
        let listName = prompt("List Name?", "");
        let newList = list(listName);
        _allLists.push(newList);

        populateNavBarList();
        populateTaskListField();
    }

    function enterKeyToSaveChanges(e) {
        if(e.code == "Enter" && cache.newTaskCard.style.display == "flex") {
            createNewListItem();
        }
    }

    function deleteKeyToDeleteOpenTask(e) {
        if(e.code == "Delete" && cache.newTaskCard.style.display == "flex") {
            closeTaskCard();
        }
    }

    function populateTaskListField() {
        clearAllTaskListField();

        _allLists.forEach(curr => {
            let option = document.createElement("option");

            option.textContent = curr.getName();
            option.value = curr.getName();
            cache.taskListField.appendChild(option);
        })

        cache.taskListField.value = "To Do";
    }

    function clearAllTaskListField() {
        cache.taskListField.innerHTML = "";
    }

    function addNewChecklistItem() {
        let toAdd = prompt("New checklist item:", "");
        let obj = {};
        obj[toAdd] = false;

        let newLi = document.createElement("li");
        let newInput = document.createElement("input");
        let newLabel = document.createElement("label");

        newLi.appendChild(newInput);
        newLi.appendChild(newLabel);

        newInput.type = "checkbox";
        newInput.id = Object.keys(obj)[0];
        newInput.checked = Object.values(obj)[0];
        newLabel.htmlFor = Object.keys(obj)[0];
        newLabel.textContent = Object.keys(obj)[0];

        cache.checkList.insertBefore(newLi, cache.addNewChecklistItemButton);
    }
})();

export default displayController;