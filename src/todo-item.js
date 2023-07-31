const todoItem = (title, description) => {
    let _title = title;
    let _description = description; 

    const getTitle = () => _title;
    const getDescription = () => _description;

    return {
        getTitle,
        getDescription
    }
} 

export default todoItem;