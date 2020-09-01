//34.第一个只出现一次的字符位置
function FirstNotRepeatingChar(str){
    // write code here
    let arr = str.split('')
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
            return i
        }
    }
    return -1
}