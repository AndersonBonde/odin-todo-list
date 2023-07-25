const displayController = (() => {
    const cache = cacheDOM();

    addListeners(cache);

    return {
        cache
    }
})();

function cacheDOM() {
    const obj = {};

    obj.addNewTaskButton = document.querySelector("#add-new-task");
    obj.newTaskCard = document.querySelector(".task");
    obj.currentList = document.querySelector(".current-list");

    return obj;
}

function addListeners(obj) {
    obj.addNewTaskButton.addEventListener("click", openNewTaskCard.bind(this, obj));
}

function openNewTaskCard(obj) {
    obj.newTaskCard.style.display = "flex";
}

function closeNewTaskCard() {
    newTaskCard.style.display = "none";
}

export default displayController;

// function addNewTask() {
//     let item = todoItem("Test Item", "Testing to see if adding a new task is working as intended.");

//     let newListItem = listItem(item);

//     currentList.appendChild(newListItem);
// }