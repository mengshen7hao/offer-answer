//33.丑数
function GetUglyNumber_Solution(index){
    // write code here
    if(!index)   return 0;
    let p1=0,p2=0,p3=0,nums=[1];
    for(let i=1;i<index;i++){
        nums[i] = Math.min(2*nums[p1],3*nums[p2],5*nums[p3]);
        if(nums[i]==2*nums[p1]) p1++;
        if(nums[i]==3*nums[p2]) p2++;
        if(nums[i]==5*nums[p3]) p3++;
    }
    return nums[index-1];
}