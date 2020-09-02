//58.对称的二叉树
function isSymmetrical(pRoot){
    // write code here
    if(!pRoot) return true;
    return helper(pRoot.left,pRoot.right)
}
function helper(left, right){
  if(left === null && right === null) return true
  if(left === null || right === null) return false
  return left.val === right.val && helper(left.left, right.right)&& helper(left.right, right.left)
}