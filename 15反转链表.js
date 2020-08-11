//15.反转链表
//输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead){
    // write code here
    if(!pHead){return null}
    let p=null,c=pHead,n;
    while(c){
         n = c.next
         c.next = p
         p = c
         c = n
    }
    return p
}