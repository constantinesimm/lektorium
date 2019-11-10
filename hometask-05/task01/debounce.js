function debounce(searchFunc, wait, immediate) {
    let timeout;
    return function() {
        let later = function() {
            timeout = null;
            if (!immediate) {
                searchFunc.apply(this, arguments);
            }
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            searchFunc.apply(this, arguments);
        }
    };
};