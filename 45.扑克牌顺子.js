//45.扑克牌顺子
function IsContinuous(numbers){
    // write code here
    let arr=numbers.filter(n => n!=0)
    let max=Math.max(...arr)
    let min=Math.min(...arr)
    if(max-min>4||numbers.length!=5) return false;
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])!=i) return false;
    }
    return true
}