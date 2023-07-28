import "./style.css";
import todoItem from "./todo-item";
import listItem from "./list-item";
import displayController from "./displayController";

// Create placeholder item-list for testing
let newItem = todoItem("Placeholder", "Description for the placeholder task.");
let newListItem = listItem(newItem);
displayController.cache.currentList.appendChild(newListItem);