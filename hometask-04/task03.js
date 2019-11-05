/*
    1) myForEach - тот же самый forEach
    2) myMap - тот же самый map
    3) mySort - тот же самый sort

 */

Array.prototype.myEach = function (callback, scope) {
    for (let i = 0; i < this.length; i++) {
        callback.call(scope, this[i], i, this);
    }
};

Array.prototype.myMap = function (callback, scope) {
    if (!callback) {
        throw new SyntaxError('This prototype must have a second argument - callback function.');
    }
    let array = [];

    for (let i = 0; i < this.length; i++) {
        array[i] = callback.call(scope, this[i], i, this)
    }

    return array;
};

Array.prototype.mySort = function (compareFn) {
    for (let i = 0; i < this.length; i++) {
        let min = i;
        for (let j = i + 1; j < this.length; j++) {
            if (compareFn) {
                let comparison = compareFn(this[j], this[min]);
                if (comparison < 0) {
                    min = j;
                }
            } else if (this[j] < this[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = this[i];
            this[i] = this[min];
            this[min] = tmp;
        }
    }
    return this;
};