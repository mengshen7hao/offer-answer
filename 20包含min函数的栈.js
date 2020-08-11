//20.包含min函数的栈
//定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
let arr = []
function push(node){
    // write code here
    arr.push(node)
}
function pop(){
    // write code here
    return arr.pop()
}
function top(){
    // write code here
    return arr.length==0 ? null : arr[arr.length-1]
}
function min(){
    // write code here
    return Math.min(...arr)  
}