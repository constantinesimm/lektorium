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

    let target = mode === 'min' ? Infinity : -Infinity; //default target value.

    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])) {  //skip current index if NaN
            continue;
        }
        //check mode and do action
        if ((mode === 'min' && array[index] < target) || (mode === 'max' && array[index] > target)) {
            target = array[index];
        }
    }

    return target
};

function summaryValues(array) {
    //first of all throw error
    if (!array.length || !(array instanceof Array)) {
        throw new Error('Check your DATA: array can not be empty')
    }

    let summary = null; //default target value.

    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])) { //skip current index if NaN
            continue;
        }
        summary += array[index]; //summary value + current index
    }

    return summary;
};


//tests
[
    [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
    [-1,-8,-2],
    [1,7,3],
    [1,undefined,3,5,-3],
    [1,NaN,3,5,-3],
    [null, 1,-3,-34,-5,1,44,-12,3,54],
    [NaN,0,-5,1,-3,-34,-12],
    [undefined, 2,-3,-3,2,1,4,-21,undefined,3,5],
    [{a: 'something'}, 3,0,-5,1,44,-12,3]
].forEach(testcase => {
    console.log(`testcase [${testcase}]\n\t Find minimum – ${findMinMaxValue('min', testcase)}\n\t Find maximum – ${findMinMaxValue('max', testcase)}\n\t Summary – ${summaryValues(testcase)}`)
});