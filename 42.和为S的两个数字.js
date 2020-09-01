//42.和为S的两个数字
function FindNumbersWithSum(array, sum){
    // write code here]
    let arr = []
    for(let i=0;i<array.length;i++){
        let index = array.indexOf(sum-array[i])
        if(index>i){
            arr.push([array[i],array[index]])
        }
    }
    return arr.length==0? []:arr[0]
}