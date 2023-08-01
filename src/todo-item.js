const todoItem = (title, description, dueTime = "") => {
    let _title = title;
    let _description = description;
    let _dueTime = dueTime; 

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueTime = () => _dueTime;

    return {
        getTitle,
        getDescription,
        getDueTime
    }
} 

export default todoItem;