//46.孩子们的游戏(圆圈中最后剩下的数)
function LastRemaining_Solution(n, m){
    // write code here
    if(n < 1) return -1;
    let last = 0;
    for(let i=2;i<=n;i++){
        last=(last+m)%i;
    }
    return last;
}