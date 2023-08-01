import events from "./events";

const listItem = (todoItem) => {
    const elements = createElements();
    const item = todoItem;
    let id = `${item.getTitle()} ${item.getDescription()}`;

    addClassesAndData();
    parentChildStructure();
    addText();
    addListenersToButtons();
    
    function createElements() {
        const obj = {};
    
        obj.container = document.createElement("div");
        obj.title = document.createElement("h3");
        obj.dueTime = document.createElement("span");
        obj.description = document.createElement("p");
        obj.buttonContainer = document.createElement("div");
        obj.deleteButton = document.createElement("button");
        obj.viewButton = document.createElement("button");
    
        return obj;
    }
    
    function addClassesAndData() {
        elements.container.classList.add("list-item");
        elements.container.dataset.id = id;
    
        elements.title.classList.add("list-item-title");
        elements.dueTime.classList.add("list-due-time");
        elements.description.classList.add("list-item-description");
        elements.buttonContainer.classList.add("list-item-buttons");
        elements.deleteButton.classList.add("list-item-delete");
        elements.viewButton.classList.add("list-item-view");
    }
    
    function parentChildStructure() {
        elements.container.appendChild(elements.title);
        elements.container.appendChild(elements.description);
        elements.container.appendChild(elements.buttonContainer);
        
        elements.buttonContainer.appendChild(elements.deleteButton);
        elements.buttonContainer.appendChild(elements.viewButton);
        elements.buttonContainer.appendChild(elements.dueTime);
    }
    
    function addText() {
        elements.title.textContent = item.getTitle();
        elements.dueTime.textContent = calculateTimeToDueDateInDays();
        elements.description.textContent = item.getDescription();
        elements.deleteButton.textContent = "Delete";
        elements.viewButton.textContent = "View";
    }

    function calculateTimeToDueDateInDays() {
        if(item.getDueTime() == "") return "";

        let dueDate = new Date(item.getDueTime());
        let today = new Date();
        let diff = dueDate.getTime() - today.getTime();
        let diffInDays = diff / (1000 * 3600 * 24);

        return `Due Time: ${diffInDays.toFixed(1)} days`;
    }
    
    function addListenersToButtons() {
        elements.deleteButton.addEventListener("click", deleteSelf);
        elements.viewButton.addEventListener("click", displaySelf);
    }
    
    function deleteSelf() {
        events.emit("deleteItem", id);
    }
    
    function displaySelf() {
        events.emit("viewItem", id, item);
    }

    return {
        container: elements.container,
        item,
        id
    }
}

export default listItem;