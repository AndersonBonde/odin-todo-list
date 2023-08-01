const todoItem = (title, description, dueTime = "", checkList = {}) => {
    let _title = title;
    let _description = description;
    let _dueTime = dueTime; 
    let _checkList = checkList;

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueTime = () => _dueTime;
    const getCheckList = () => _checkList;

    return {
        getTitle,
        getDescription,
        getDueTime,
        getCheckList
    }
} 

export default todoItem;