//31.整数中1出现的次数
function NumberOf1Between1AndN_Solution(n){
    // write code here
    let sum =0;
    for(let i=1;i<=n;i++){
        let s = (''+i).split('');
        for(let j=0;j<s.length;j++){
            if(s[j]==1){
                sum++;
            }
        }
    }
    return sum;
}