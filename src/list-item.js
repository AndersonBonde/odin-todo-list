const listItem = (todoItem) => {
    const elements = createListItemElements();
    
    addClasses(elements);
}

function createListItemElements() {
    const obj = {};
    
    obj.container = document.createElement("div");
    obj.title = document.createElement("h3");
    obj.description = document.createElement("p");
    obj.buttonContainer = document.createElement("div");
    obj.deleteButton = document.createElement("button");
    obj.viewButton = document.createElement("button");
    
    return obj;
}

function addClasses(obj) {
    obj.container.classList.add("list-item");
    obj.title.classList.add("list-item-title");
    obj.description.classList.add("list-item-description");
    obj.buttonContainer.classList.add("list-item-buttons");
    obj.deleteButton.classList.add("list-item-delete");
    obj.viewButton.classList.add("list-item-view");
}

export default listItem;