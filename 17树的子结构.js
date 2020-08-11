//17.树的子结构
//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2){
    // write code here
    if(!pRoot1 || !pRoot2){return false}
    return  find(pRoot1,pRoot2)||HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2)
}
function find(m,n){
    if(!n) return true    // root2 为 null 时，不管 root1 为何值，都是 true
    if(!m||m.val != n.val) return false
    return find(m.left, n.left) && find(m.right, n.right)
}