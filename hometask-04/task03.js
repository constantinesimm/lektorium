/*
    1) myForEach - тот же самый forEach
    2) myMap - тот же самый map
    3) mySort - тот же самый sort

 */

Array.prototype.myEach = function(callback, scope) {
    for (let i = 0; i < this.length; i++) {
        callback.call(scope, this[i], i, this);
    }
};

Array.prototype.myMap = function(callback, scope) {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        array[i] = callback.call(scope, this[i], i, this)
    }

    return array;
};

Array.prototype.mySort = function() {

};