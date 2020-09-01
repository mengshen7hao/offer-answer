//37.数字在排序数组中出现的次数
function GetNumberOfK(data, k){
    // write code here
    let c = 0
    for(let i=0;i<data.length;i++){
        if(data[i]==k){
            c++
        }
    }
    return c
}