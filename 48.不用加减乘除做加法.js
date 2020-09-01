//48.不用加减乘除做加法
function Add(num1, num2){
    // write code here
    while(num2){
        let t = num1^num2    //不进位的相加
        num2 = (num1&num2)<<1   //同1则进位
        num1 = t
    }
    return num1
}