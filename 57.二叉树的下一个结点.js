//57.二叉树的下一个结点
function GetNext(pNode){
    // write code here
    if(pNode.right){
        pNode = pNode.right;
        while(pNode.left){
            pNode = pNode.left
        }
        return pNode
    }
    while(pNode.next){
        let pRoot = pNode.next;
        if(pNode == pRoot.left){
            return pRoot
        }
        pNode = pNode.next
    }
    return null
}