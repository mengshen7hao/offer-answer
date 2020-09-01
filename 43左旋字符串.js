//43左旋字符串
function LeftRotateString(str, n){
    // write code here
    if(!str) return '';
    let nums = n%str.length;
    return str.slice(nums) + str.slice(0,nums);
}