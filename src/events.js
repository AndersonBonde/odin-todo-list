const events = (() => {
    const module = {};

    const _events = {};
    module.on = (eventName, fn) => {
        _events[eventName] = _events[eventName] || [];
        _events[eventName].push(fn);
    };
    module.off = (eventName, fn) => {
        if(_events[eventName]) {
            for(let i = 0; i < _events[eventName].length; i++) {
                if(_events[eventName][i] === fn) {
                    _events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    };
    module.emit = (eventName, data) => {
        if(_events[eventName]) {
            _events[eventName].forEach(fn => {
                fn(data);
            });
        }
    };

    return module;
})();

export default events;