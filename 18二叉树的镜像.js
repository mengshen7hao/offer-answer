//18.二叉树的镜像
//操作给定的二叉树，将其变换为源二叉树的镜像。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root){
    // write code here
    if(root){
        [root.left,root.right] = [root.right,root.left]
        Mirror(root.left);
        Mirror(root.right);
    }
    return root;
}