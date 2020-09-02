//59.按之字形顺序打印二叉树
function Print(pRoot){
    // write code here
    if(!pRoot) return []
    let queue = [],res = [],flag = true
    queue.push(pRoot)
    while(queue.length){
        let len = queue.length
        let tmp = []
        for(let i=0;i<len;i++){
            let node = queue.shift()
            tmp.push(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(!flag) tmp.reverse();
        flag = !flag
        res.push(tmp)
    }
    return res
}
