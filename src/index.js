import "./style.css";
import todoItem from "./todo-item.js";
import listItem from "./list-item.js";
import displayController from "./displayController.js";

// Create placeholder item-list for testing
let newItem = todoItem("Placeholder", "Description for the placeholder task.");
let newListItem = listItem(newItem);
displayController.cache.currentList.appendChild(newListItem);