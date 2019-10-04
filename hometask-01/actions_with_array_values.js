/*
Дан масив чисел (положительных, отрицательных и в перемешку)
Найти max, min, sum
Залить на github решение
Нельзя использовать методы массива, а только циклы for, while*
 */

//import helpers functions
const { generateRandomIntArray, validateArray, validateArrayValue } = require('./helpers');

//arrays with random generated values
const positiveNumbersArray = generateRandomIntArray(100, 1, 15);
const negativeNumbersArray = generateRandomIntArray(-26, -176, 15);
const mixedNumbersArray = generateRandomIntArray(-289, 545, 15);

//get array min value function
function getArrayMinValue(inputArray) {
    let validArray = validateArray(inputArray),         //validate source data and return array or throw Error
        minValue = validArray[0],                       //set default min value = array first index value
        currentIterateIndex;                            //current iterate index value

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = validateArrayValue(validArray[index]); //validate index value
        //set min value if current index is lowest than default min value
        if (currentIterateIndex < minValue) {
            minValue = currentIterateIndex
        }
    }

    return minValue;
};

//get array max value function
function getArrayMaxValue(inputArray) {
    let validArray = validateArray(inputArray),         //validate source data and return array or throw Error
        maxValue = validArray[0],                       //set default min value = array first index value
        currentIterateIndex;                            //current iterate index value

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = validateArrayValue(validArray[index]); //validate index value
        //set max value if current index is bigger that default max value
        if (currentIterateIndex > maxValue) {
            maxValue = currentIterateIndex
        }
    }

    return maxValue;
};

//get array values summary function
function getArrayValuesSummary(inputArray) {
    let validArray = validateArray(inputArray),         //validate source data and return array or throw Error
        currentIterateIndex,                            //current iterate index value
        summaryArrayValues = 0;                         //variable for array values summary

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = validateArrayValue(validArray[index]); //validate index value

        //array index values summary
        summaryArrayValues += currentIterateIndex;
    }

    return summaryArrayValues;
};