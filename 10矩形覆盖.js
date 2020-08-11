//10.矩形覆盖
//我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？比如n=3时，2*3的矩形块有3种覆盖方法：
//斐波那契问题
function rectCover(number){
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