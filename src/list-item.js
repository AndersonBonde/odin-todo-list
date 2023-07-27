import displayController from "./displayController";

const listItem = (todoItem) => {
    const elements = createElements();
    const item = todoItem;
    const id = item.getTitle();

    addClassesAndData(elements, id);
    parentChildStructure(elements);
    addText(elements, todoItem);
    addListenersToButtons(elements, id, todoItem);
    
    function createElements() {
        const obj = {};
    
        obj.container = document.createElement("div");
        obj.title = document.createElement("h3");
        obj.description = document.createElement("p");
        obj.buttonContainer = document.createElement("div");
        obj.deleteButton = document.createElement("button");
        obj.viewButton = document.createElement("button");
    
        return obj;
    }
    
    function addClassesAndData(obj, id) {
        obj.container.classList.add("list-item");
        obj.container.dataset.id = id;
    
        obj.title.classList.add("list-item-title");
        obj.description.classList.add("list-item-description");
        obj.buttonContainer.classList.add("list-item-buttons");
        obj.deleteButton.classList.add("list-item-delete");
        obj.viewButton.classList.add("list-item-view");
    }
    
    function parentChildStructure(obj) {
        obj.container.appendChild(obj.title);
        obj.container.appendChild(obj.description);
        obj.container.appendChild(obj.buttonContainer);
        
        obj.buttonContainer.appendChild(obj.deleteButton);
        obj.buttonContainer.appendChild(obj.viewButton);
    }
    
    function addText(obj, item) {
        obj.title.textContent = item.getTitle();
        obj.description.textContent = item.getDescription();
        obj.deleteButton.textContent = "Delete";
        obj.viewButton.textContent = "View";
    }
    
    function addListenersToButtons(obj, id, item) {
        obj.deleteButton.addEventListener("click", deleteSelf.bind(null, obj));
        obj.viewButton.addEventListener("click", displaySelf.bind(null, obj, id, item));
    }
    
    function deleteSelf(obj) {
        let parent = obj.deleteButton.closest(".list-item");
        displayController.cache.currentList.removeChild(parent);
    }
    
    function displaySelf(obj, id, item) {
        displayController.openTaskCardWithInfo(displayController.cache, id, item);
    }

    return elements.container;
}

export default listItem;