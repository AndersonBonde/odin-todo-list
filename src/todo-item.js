const todoItem = (title, description, dueTime = "", checkList = []) => {
    let _title = title;
    let _description = description;
    let _dueTime = dueTime; 
    let _checkList = checkList;

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueTime = () => _dueTime;
    const getCheckList = () => _checkList;

    function addToCheckList(toAdd) {
        if(typeof toAdd !== "object") {
            console.log("addToCheckList must be an object"); 
            return;
        };

        _checkList.push(toAdd);
    }

    return {
        getTitle,
        getDescription,
        getDueTime,
        getCheckList,
        addToCheckList
    }
} 

export default todoItem;