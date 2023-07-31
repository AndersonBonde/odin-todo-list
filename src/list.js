import events from "./events";

const list = (name) => {
    const items = [];
    let _name = name;

    const getName = () => _name;

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
        items,
        getName
    }
}

export default list;