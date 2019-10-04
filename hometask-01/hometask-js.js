/*
Дан масив чисел (положительных, отрицательных и в перемешку)
Найти max, min, sum
Залить на github решение
Нельзя использовать методы массива, а только циклы for, while*
 */

//import helpers functions
const { generateRandomIntArray, validateArray } = require('./helpers');

//define arrays
const positiveNumbersArray = generateRandomIntArray(100, 1, 15);
const negativeNumbersArray = generateRandomIntArray(-26, -176, 15);
const mixedNumbersArray = generateRandomIntArray(-289, 545, 15);

//get array min value function
function getArrayMinValue(inputArray) {
    let validArray = validateArray(inputArray),         //validate source data and return Array or throw Error
        minValue = validArray[0],                       //set default min value
        currentIterateIndex;                            //define variable for current iterate index value

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = !isNaN(Number(validArray[index])) ? validArray[index]: validArray[index] = 0; //check index value not isNaN or set index value = 0
        //set min value if current index is lowest than default min value
        if (currentIterateIndex < minValue) {
            minValue = currentIterateIndex
        }
    }

    return minValue;
};

//get array max value function
function getArrayMaxValue(inputArray) {
    let validArray = validateArray(inputArray),         //validate source data and return Array or throw Error
        maxValue = validArray[0],                       //set default max value
        currentIterateIndex;                            //define variable for current iterate index value

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = !isNaN(Number(validArray[index])) ? validArray[index]: validArray[index] = 0; //check index value not isNaN or set index value = 0
        //set max value if current index is bigger that default max value
        if (currentIterateIndex > maxValue) {
            maxValue = currentIterateIndex
        }
    }

    return maxValue;
};

//get array values summary function
function getArrayValuesSummary(inputArray) {
    let validArray = validateArray(inputArray),         //validate source data and return Array or throw Error
        currentIterateIndex,                            //define variable for current iterate index value
        summaryArrayValues = 0;                         //define variable for array index values summary

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = !isNaN(Number(validArray[index])) ? validArray[index]: validArray[index] = 0; //check index value not isNaN or set index value = 0

        //summary array index values
        summaryArrayValues += currentIterateIndex;
    }

    return summaryArrayValues;
};

//get min value function result
console.log('min positive value func - ' + getArrayMinValue(positiveNumbersArray));
console.log('min negative value func - ' + getArrayMinValue(negativeNumbersArray));
console.log('min all value func - ' + getArrayMinValue(mixedNumbersArray));

//get max value function result
console.log('max positive value func - ' + getArrayMaxValue(positiveNumbersArray));
console.log('max negative value func - ' + getArrayMaxValue(negativeNumbersArray));
console.log('max all value func - ' + getArrayMaxValue(mixedNumbersArray));

//get values summary function result
console.log('sum positive values func - ' + getArrayValuesSummary(positiveNumbersArray));
console.log('sum negative values func - ' + getArrayValuesSummary(negativeNumbersArray));
console.log('sum all values func - ' + getArrayValuesSummary(mixedNumbersArray));