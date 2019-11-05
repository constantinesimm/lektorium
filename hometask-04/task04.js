/*
    On a 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.
    Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid is at the last row and column.
    Now, we walk in a clockwise spiral shape to visit every position in this grid.
    Whenever we would move outside the boundary of the grid, we continue our walk outside the grid (but may return to the grid boundary later.)
    Eventually, we reach all R * C spaces of the grid.
    Return a list of coordinates representing the positions of the grid in the order they were visited.

    Example 1:
    Input: R = 1, C = 4, r0 = 0, c0 = 0
    Output: [[0,0],[0,1],[0,2],[0,3]]

    Example 2:
    Input: R = 5, C = 6, r0 = 1, c0 = 4
    Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]

    Note:
    1 <= R <= 100
    1 <= C <= 100
    0 <= r0 < R
    0 <= c0 < C
 */

//random int
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const R = randomInt(1, 100);
const C = randomInt(1, 100);
let r0 = randomInt(0, R);
let c0 = randomInt(0, C);
const totalCells = R * C;

let matrix = new Array(R);

for (let i = 0; i < R; i++) {
    matrix[i] = new Array(C);

    for (let j = 0; j < C; j++) {
        matrix[i][j] = ''
    }
}

const spiralMatrix = matrix => {
    console.log(matrix);
    let counter = 1;
    let rowEnd = R - 1;
    let colEnd = C - 1;

    let result = [];
    //iterate matrix while cells counter < total cells
    while (counter < totalCells) {
        for (let i = c0; i <= colEnd; i++) {
            matrix[r0][i] = counter;
            counter++;
        }
        r0++;

        for (let j = r0; j < rowEnd; j++) {
            matrix[j][colEnd] = counter;
            counter++;
        }
        colEnd--;

        for (let i = colEnd; i >= c0; i--) {
            matrix[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        for (let i = rowEnd; i>= r0; i++) {
            matrix[i][c0] = counter;
            counter++;
        }
        c0++
    }

    return matrix;
};

console.log(spiralMatrix(matrix))