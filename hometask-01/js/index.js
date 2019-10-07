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

//helpers
const helpers = {
    generateRandomIntArray(firstValue, lastValue, arrayLength) {
        let generatedArray = [],
            rangeStartValue = Math.min(firstValue, lastValue), //get range start value
            rangeEndValue = Math.max(firstValue, lastValue);   //get range end value
        //generate random int array
        while (generatedArray.length < arrayLength) {
            generatedArray.push(Math.floor(Math.random() * (rangeEndValue - rangeStartValue) + rangeStartValue));
        };

        return generatedArray;
    },
    validateArray(source) {
        let checkInstance = source instanceof Array,
            checkLength = source.length;
        //check source data is instance of array
        if (!checkInstance) {
            throw new TypeError('argument is not instance of Array. Check your source data')
        }
        //check source data array is not empty
        if (!checkLength) {
            throw new Error('Array can not be empty. Please check your source data')
        }

        return source;
    },
    validateArrayIndex(indexValue) {
        if (isNaN(indexValue)) {
            throw new TypeError('one of arr values not-a-number')
        }

        return Number(indexValue)
    }
};

function getArrayMinValue(sourceArray) {
    let validArray = helpers.validateArray(sourceArray), //validate source arr or throw type error
        minValue = validArray[0],                        //set default min value as arr first index
        currentIterateIndex;                             //current iterate index value

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = helpers.validateArrayIndex(validArray[index]); //throw type error if NaN
        if (currentIterateIndex < minValue) {
            minValue = currentIterateIndex
        }
    }

    return minValue;
};

function getArrayMaxValue(sourceArray) {
    let validArray = helpers.validateArray(sourceArray), //validate source arr or throw type error
        maxValue = validArray[0],                        //set default min value as arr first index
        currentIterateIndex;                             //current iterate index value

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = helpers.validateArrayIndex(validArray[index]); //throw type error if NaN
        if (currentIterateIndex > maxValue) {
            maxValue = currentIterateIndex
        }
    }

    return maxValue;
};

function getArrayValuesSummary(sourceArray) {
    let validArray = helpers.validateArray(sourceArray), //validate source arr or throw type error
        summaryArrayValues = 0,                          //variable for array values summary
        currentIterateIndex;                             //current iterate index value

    for (let index = 0; index < validArray.length; index++) {
        currentIterateIndex = helpers.validateArrayIndex(validArray[index]); //throw type error if NaN
        summaryArrayValues += currentIterateIndex;
    }

    return summaryArrayValues;
};

//checking for result or errors
let positiveNumbersArray = helpers.generateRandomIntArray(100, 1, 15),
    negativeNumbersArray = helpers.generateRandomIntArray(-26, -176, 15),
    mixedNumbersArray = helpers.generateRandomIntArray(-289, 545, 15),
    notArray = {},
    arrayWithNaN = [1,undefined,3,5,-13];

console.log(`min value of positive nums – ${getArrayMinValue(positiveNumbersArray)}`);
console.log(`max value of negative nums – ${getArrayMaxValue(negativeNumbersArray)}`);
console.log(`sum of mixed nums – ${getArrayValuesSummary(mixedNumbersArray)}`);
console.log(`error if not array – ${getArrayValuesSummary(notArray)}`);
console.log(`error if NaN – ${getArrayValuesSummary(arrayWithNaN)}`);