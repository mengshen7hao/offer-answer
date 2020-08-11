//7.斐波那契数列
//大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
//n<=39
function Fibonacci(n){
    // write code here
    if(n<2){return n}
    else{
        let a=0,b=1,c;
        for(let i=2;i<=n;i++){
            c = a+b
            a = b
            b = c 
        }
        return b
    }
}