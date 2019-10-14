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
    let target = array[0];
    if (!array.length || !(array instanceof Array)) {
        throw new Error('Check your data')
    }
    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])) {
            continue;
        }
        if (mode === 'max') {
            array[index] > target ? target = array[index] : target
        } else {
            array[index] < target ? target = array[index] : target
        }
    }

    return target;
}

function summaryArrayValues(array) {
    let summary = null;
    if (!array.length || !(array instanceof Array)) {
        throw new Error('Check your data')
    }
    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])) {
            continue;
        }
        summary += array[index]
    }

    return summary;
};