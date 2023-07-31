import events from "./events";

const list = () => {
    const items = [];

    addListeners();

    function addListeners() {
        events.on("listItemCreated", addItemToList);
        events.on("listItemDeleted", deleteItemFromList);
    }

    function addItemToList(listItem) {
        items.push(listItem);
    }

    function deleteItemFromList(id) {
        let idIndex = items.findIndex(curr => curr.id == id);
        items.splice(idIndex, 1);
    }

    return {
        items
    }
}

export default list;