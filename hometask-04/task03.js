/*
    1) myForEach - тот же самый forEach
    2) myMap - тот же самый map
    3) mySort - тот же самый sort

 */

function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i = i + 1) {
        callback(arr[i], i, arr);
    }
};

function myMap(arr, callback) {
    let array = [];

    for (let index = 0; index < arr.length; index++) {
        array[index] = callback(arr[index], index, arr)
    }

    return array;
}

function mySort() {
//swap items in array
    const swapItems = function (array, current, next) {
        let temporary = array[current];
        array[current] = array[next];
        array[next] = temporary;
    };
    /*
        - finding the middle of array and set pointer
        - set left pointer from the 1st element and the right pointer from the last element
        - while left pointer < middle pointer -> move left pointer right
        - while right pointer > middle pointer -> move right pointer left
        - if left pointer <= right pointer -> swap elements in array
        - move left pointer right and right pointer left
    */
    const partitionArray = function (array, left, right) {
        const middle = array[Math.floor((right + left) / 2)];
        while (left <= right) {
            while (array[left] < middle) {
                left++
            }
            while (array[right] > middle) {
                right--
            }
            if (left <= right) {
                swapItems(array, left, right);
                left++;
                right--;
            }
        }
        return left;
    };

    //sort function
    const quickSort = function (array, left, right) {
        let index;
        if (array.length > 1) {                             //check length for 2 or more items
            index = partitionArray(array, left, right);     //index is left item after partition
            if (left < index - 1) {                         //sort if left index < left index - 1
                quickSort(array, left, index - 1);
            }
            if (index < right) {                            //sort if index < right
                quickSort(array, index, right);
            }
        }
        return array;
    };

    return quickSort(this, 0, this.length - 1);
}