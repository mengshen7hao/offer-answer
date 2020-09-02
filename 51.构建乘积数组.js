//51.构建乘积数组
function multiply(array){
    // write code here
    let arr = []
    for(let i=0;i<array.length;i++){
        arr[i] = 1
        for(let j=0;j<array.length;j++){
            if(i!=j){
                arr[i]*=array[j]
            }
        }
    }
    return arr
}