const todoItem = (title, description) => {
    const getTitle = () => title;
    const getDescription = () => description;

    const modifyTitle = (newTitle) => title = newTitle;
    const modifyDescription = (newDesc) => description = newDesc;

    return {
        getTitle,
        getDescription,
        modifyTitle,
        modifyDescription
    }
} 

export default todoItem;