//47.求1+2+3+...+n
function Sum_Solution(n){
    // write code here
    //return n*(n+1)/2
    return n>=1?n+Sum_Solution(n-1):0
}