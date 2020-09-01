//50.数组中重复的数字
function duplicate(numbers, duplication){
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let obj = {}
    for(let i of numbers){
        if(!obj[i]){
            obj[i] = 1
        }else{
            duplication[0] = i
            return true
        }
    }
    return false
}