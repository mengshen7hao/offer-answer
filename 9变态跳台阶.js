//9.变态跳台阶
//一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
//数学问题：2^(number-1)
function jumpFloorII(number){
    // write code here
    //return Math.pow(2,number-1)
    return 2**(number-1)
}