//56.删除链表中重复的结点
function deleteDuplication(pHead){
    // write code here
    if(pHead == null || pHead.next == null) return pHead;    // 只有0个或1个结点，则返回
    let pNode = pHead.next;
    if(pHead.val == pHead.next.val){  // 当前结点是重复结点
        while(pNode != null && pHead.val == pNode.val){  
            pNode = pNode.next; // 跳过值与当前结点相同的全部结点,找到第一个与当前结点不同的结点
        }
        return deleteDuplication(pNode)      // 从第一个与当前结点不同的结点开始递归
    }else{
        pHead.next = deleteDuplication(pNode);  // 当前结点不是重复结点,保留当前结点，从下一个结点开始递归
        return pHead;
    }
}