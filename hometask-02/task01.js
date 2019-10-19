/*
    Найти в массиве: sum, min and max, заменить min and max, используя методы, изученные на занятии.
    Создать функцию которая возвращает все тти значения в объекте.
    Примеры массивов:
    [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
    [-1,-8,-2]
    [1,7,3]
    [1,undefined,3,5,-3]
    [1,NaN,3,5,-3]
 */

function findMinMaxValue(mode, array) {
    //first of all throw error
    if (!(mode === 'min' || mode === 'max' ) || !array.length || !(array instanceof Array)) {
        throw new Error('Check your DATA: mode – \'min\' or \'max\'. array can not be empty');
    }

    let target = array[0];
    //skip NaN value, ckeck mode and do action
    array.forEach(index => {
        if (isNaN(index)) {
            return;
        }

        if (mode === 'min') {
            index < target ? target = index : false;
        } else {
            index > target ? target = index : false;
        }
    });

    return target;
};

function summaryValues(array) {
    let summary = null;
    //first of all throw error
    if (!array.length || !(array instanceof Array)) {
        throw new Error('Check your DATA: array can not be empty')
    }
    //do action and skip NaN value
    array.forEach(index => {
        if (isNaN(index)) {
            return;
        }
        summary += index
    });

    return summary;
};

function resultFunction(array) {
    //first of all throw error
    if (!array.length || !(array instanceof Array)) {
        throw new Error('Check your DATA: array can not be empty')
    }

    return  {
        min: findMinMaxValue('min', array),
        max: findMinMaxValue('max', array),
        sum: summaryValues(array)
    };
}