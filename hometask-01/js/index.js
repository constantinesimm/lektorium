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

function findMinMaxValue(mode, array) {
    //first of all throw error
    if (!(mode === 'min' || mode === 'max' ) || !array.length || !(array instanceof Array)) {
        throw new Error('Check your DATA: mode – \'min\' or \'max\'. array can not be empty');
    }

    let target = array[0];
    for (let index = 0; index < array.length; index++) {
        //skip current iterate if NaN
        if (isNaN(array[index])) {
            continue;
        }
        //check mode and do action
        if (mode === 'min') {
            array[index] < target ? target = array[index] : false;
        } else {
            array[index] > target ? target = array[index] : false;
        }
    }

    return target;
};

function summaryValues(array) {
    let summary = null;
    //first of all throw error
    if (!array.length || !(array instanceof Array)) {
        throw new Error('Check your DATA: array can not be empty')
    }
    for (let index = 0; index < array.length; index++) {
        //skip current iterate if NaN
        if (isNaN(array[index])) {
            continue;
        }
        //do action
        summary += array[index]
    }

    return summary;
};