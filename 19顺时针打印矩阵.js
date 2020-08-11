//19.顺时针打印矩阵
//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
function printMatrix(matrix){
    // write code here
    let arr = []
    if (matrix.length === 0) return arr
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    for(;top < bottom && left < right;top++,bottom--,left++,right--){
        for (let i = left; i < right; i++) arr.push(matrix[top][i])   
        for (let i = top; i < bottom; i++) arr.push(matrix[i][right]) 
        for (let i = right; i > left; i--) arr.push(matrix[bottom][i])
        for (let i = bottom; i > top; i--) arr.push(matrix[i][left]) 
    }
    if (top === bottom) //最后一行时
        for (let i = left; i <= right; i++) arr.push(matrix[top][i])
    else if (left === right) // 最后一列时
        for (let i = top; i <= bottom; i++) arr.push(matrix[i][left])
    return arr
}