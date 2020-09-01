//41.和为S的连续正数序列
function FindContinuousSequence(sum){
    // write code here
    let subSum=0,c=0,arr = []
    for(let i =1;i<sum;i++){
        for(let a = i;a<sum;a++){
            subSum+=a
            if(subSum==sum){
                ++c
                let count = a-i+1
                let tempArr = [];
                for(let d = 0;d<count;d++){
                    tempArr.push(i+d)
                }
                arr.push(tempArr)
            }else if(subSum>sum){
                subSum=0
                break
            }
       }
    }
    return arr
}