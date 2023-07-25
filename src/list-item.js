const listItem = (todoItem) => {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const buttonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const viewButton = document.createElement("button");
    
    container.classList.add("list-item");
    title.classList.add("list-item-title");
    description.classList.add("list-item-description");
    buttonContainer.classList.add("list-item-buttons");
    deleteButton.classList.add("list-item-delete");
    viewButton.classList.add("list-item-view");

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(buttonContainer);
    
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(viewButton);

    title.textContent = todoItem.getTitle();
    description.textContent = todoItem.getDescription();
    deleteButton.textContent = "Delete";
    viewButton.textContent = "View";

    return container;
}

export default listItem;