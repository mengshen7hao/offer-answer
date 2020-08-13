//23.二叉搜索树的后序遍历序列
function VerifySquenceOfBST(sequence){
    // write code here
    if(!sequence.length){return false;}
    let s = sequence.length,c = 0;
    while(--s){
        while(sequence[c++] < sequence[s]);//s是根节点，前面的数小于s
        while(sequence[c++] > sequence[s]);//s是根节点，后面的数大于s
        if(c < s){return false;}
        c = 0;
    }
    return true; 
}