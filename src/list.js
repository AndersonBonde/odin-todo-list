const list = (name) => {
    const items = [];
    let _name = name;

    const getName = () => _name;

    return {
        items,
        getName
    }
}

export default list;