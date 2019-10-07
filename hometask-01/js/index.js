/*
    Дан масив чисел (положительных, отрицательных и в перемешку)
    Найти max, min, sum
    Залить на github решение
    Нельзя использовать методы массива, а только циклы for, while*
    Примеры массивов:
    [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
    [-1,-8,-2]
    [1,7,3]
    [1,undefined,3,5,-3]
    [1,NaN,3,5,-3]
 */

const checkArgument = {
    _isArray(array) {
        if (!(array instanceof Array)) {
            throw new TypeError(`Argument is not Array`);
        }
        if (!array.length) {
            throw new Error(`Array is empty`);
        }

        return array;
    },
    _isNaN(index, value) {
        if (isNaN(value)) {
            throw new TypeError(`Array value at index ${index} isNaN – ${value}`);
        }

        return Number(value)
    }
};

function findArrayMinValue(array) {
    array = checkArgument._isArray(array);  //throw error if argument not array
    let target = array[0],                  //set min value
        currentIterateValue;                //current iterate value

    for (let index = 0; index < array.length; index++) {
        currentIterateValue = checkArgument._isNaN(index, array[index]);    //throw error if value isNaN
        if (currentIterateValue < target) {
            target = currentIterateValue;
        }
    }

    return target;
};

function findArrayMaxValue(array) {
    array = checkArgument._isArray(array);  //throw error if argument not array
    let target = array[0],                  //set max value
        currentIterateValue;                //current iterate value

    for (let index = 0; index < array.length; index++) {
        currentIterateValue = checkArgument._isNaN(index, array[index]);    //throw error if value isNaN
        if (currentIterateValue > target) {
            target = currentIterateValue;
        }
    }

    return target;
};

function summaryArrayValues(array) {
    array = checkArgument._isArray(array);      //throw error if argument not array
    let summary = null,                         //set default summary
        currentIterateValue;                    //current iterate value

    for (let index = 0; index < array.length; index++) {
        currentIterateValue = checkArgument._isNaN(index, array[index]);    //throw error if value isNaN
        summary += currentIterateValue;
    }

    return summary;
};