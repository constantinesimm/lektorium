//export helpers
module.exports = {
    generateRandomIntArray,
    validateArray,
    validateArrayValue
};

//generate random values for source array
function generateRandomIntArray(firstValue, lastValue, arrayLength) {
    let resultArray = [];                           //define result array
    let minValue = Math.min(firstValue, lastValue), //get min value from arguments
        maxValue = Math.max(firstValue, lastValue); //get max value from arguments

    //generate random values for array
    while (resultArray.length < arrayLength) {
        resultArray.push(Math.floor(Math.random() * (maxValue - minValue) + minValue))
    }

    return resultArray;
};

//validate array by instance and length
function validateArray(sourceArray) {
    let instanceOfArray = sourceArray instanceof Array, //check data instance of Array
        arrayLength = sourceArray.length;               //check data array not empty
    if (!instanceOfArray) { //if data not array
        throw new Error('argument is not Array. Please check your source data')
    } else if (!arrayLength) { //if data is empty array
        throw new Error('Array can not be empty. Please check your source data')
    }

    return sourceArray;
};

//validate array values
function validateArrayValue(value) {
    return isNaN(Number(value)) ? value = 0 : value; //check value not isNaN or set this value = 0
}