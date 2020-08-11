//16.合并两个排序链表
//输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2){
    // write code here
    if(!pHead1){return pHead2}
    if(!pHead2){return pHead1}
    let l = null
    if(pHead1.val>pHead2.val){
        l = pHead2
        l.next = Merge(pHead1, pHead2.next)
    }else{
        l = pHead1
        l.next = Merge(pHead1.next, pHead2)
    }
    return l
}