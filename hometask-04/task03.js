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
[5, '2', NaN, 15, 12, null]
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

Array.prototype.mySort = function(compareFn) {
    if( this.length <= 1 ) {
        return this;
    }

    compareFn = typeof compareFn === 'function' && compareFn ||
        function(a, b){
            return a+'' > b+'';
        };

    for( let i = 0; i < this.length; i++ ){
        for( let j = 0; j < ( this.length - 1 ); j++ ){
            let fnResponse = compareFn( this[ j ], this[ j + 1 ] ),
                response = typeof fnResponse === 'boolean' && fnResponse || parseInt( compareFn( this[ j ], this[ j + 1 ] ) ),
                arrEntry;

            if( response && response > 0 ){
                arrEntry = this[ j + 1 ];
                this[ j + 1 ] = this[ j ];
                this[ j ] = arrEntry;
            }
        }
    }

    return this;
};
console.log([5, '2', NaN, 15, 12, null].mySort(), 'mySort');
console.log([5, '2', NaN, 15, 12, null].sort(), 'origin');
