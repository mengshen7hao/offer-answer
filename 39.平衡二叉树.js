//39.平衡二叉树
function IsBalanced_Solution(pRoot){
    // write code here
    if(!pRoot) return true;
    let left = help(pRoot.left);
    let right = help(pRoot.right);
    if(Math.abs(left-right)>1){
        return false
    }else{
        return IsBalanced_Solution(pRoot.left)&&IsBalanced_Solution(pRoot.right)
    }
}
function help(root){
     if(!root) return 0;
     let left = help(root.left)
     let right = help(root.right)
     return Math.max(right,left)+1
}