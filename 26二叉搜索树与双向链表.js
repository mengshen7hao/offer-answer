//输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
function Convert(pRootOfTree){
    // write code here
    if(!pRootOfTree||!pRootOfTree.left&&!pRootOfTree.right) return pRootOfTree
    let left=Convert(pRootOfTree.left)
    let l=left
    while(l&&l.right){l=l.right}
    if(left){
        l.right=pRootOfTree
        pRootOfTree.left=l
    }
    let right=Convert(pRootOfTree.right)
    if(right){
        right.left=pRootOfTree
        pRootOfTree.right=right
    }
    return left?left:pRootOfTree
}