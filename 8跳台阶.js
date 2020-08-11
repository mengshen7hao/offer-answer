//8.跳台阶
//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
//斐波那契问题
function jumpFloor(number){
    // write code here
   if(number<3){
        return number
    }else{
        let a=1,b=2,c;
        for(let i=3;i<=number;i++){
            c = a+b
            a = b
            b = c 
        }
        return b
    }
}
