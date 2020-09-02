//55.链表中环的入口结点
function EntryNodeOfLoop(pHead){
    // write code here
    let arr = []
    while(pHead){
        if(arr.indexOf(pHead)>=0){
            return pHead
        }else{
            arr.push(pHead)
            pHead = pHead.next
        }
    }
    return null;
}