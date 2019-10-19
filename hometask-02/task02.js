/*
Дан масив чисел, которые представляют собой показатели высоты скал: [2,1,5,0,3,4,7,2,3,1,0]
(для примера дан этот масив, но может быть любой, Ваш алгоритм должен решать все случаи)
Посчитать количество воды (количество синих йчеек), набранной в ямы после дождя.
Нужно по возможности использовать методы массива, а не обычные цыклы.
Например, в даном примере правильный ответ: 10
 */

function calculateWaterReserve(array){
    let airSum = 0;
    let groundSum = 0;

    let leftMax = array[0];
    let rightMax = array[array.length - 1];

    array.map((value, index, arr) => {
        let current = arr[index]; //left side
        if (leftMax < current) {  //if peak is higher
            airSum += (current - leftMax) * index;
            leftMax = current;
        }
        current = arr[(array.length - 1) - index]; //right side
        if (rightMax < current) {    //if we gonna down
            airSum += (current - rightMax) * index;
            rightMax = current;
        }
        groundSum += current; //get ground sum
    });

    //reserved space that would be filled with water (full sum - air sum - ground sum)
    return leftMax * array.length - airSum - groundSum;
};

//tests
[
    [[2, 5, 1, 3, 1, 2, 1, 7, 7, 6], 17],
    [[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], 10],
    [[7, 0, 1, 3, 4, 1, 2, 1], 9],
    [[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], 10],
    [[2, 2, 1, 2, 2, 3, 0, 1, 2], 4],
    [[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8], 24],
    [[2, 2, 2, 2, 2], 0]
].forEach(testCase => {
    if (calculateWaterReserve(testCase[0]) !== testCase[1]) {
        console.log(calculateWaterReserve(testCase))
    } else {
        console.log(calculateWaterReserve(testCase[0]))
    }
});



