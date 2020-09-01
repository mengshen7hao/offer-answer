//38二叉树的深度
function TreeDepth(pRoot){
    // write code here
    if(!pRoot){
        return 0;
    }else{
        return Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right))+1
    }
}