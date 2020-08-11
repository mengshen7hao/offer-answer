//21.栈的弹出、压入序列
function IsPopOrder(pushV, popV){
    // write code here
    let stack=[];
    let N=pushV.length;
    let j=0
    for(let i=0;i<N;i++){
        stack.push(pushV[i]);
        while(j<N&&popV[j]==stack[stack.length-1]&&stack.length!=0){
              stack.pop();
              j++;
        }
    }
    return stack.length==0;
}