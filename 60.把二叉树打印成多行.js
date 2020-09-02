//60.把二叉树打印成多行
function Print(pRoot){
    // write code here
    let res = [],que = [];
    if(!pRoot)  return res;
    que.push(pRoot);
    while(que.length > 0){
        let vec = [];
        let len = que.length;
        for(let i=0;i<len;i++){
            let tmp = que.shift(); //front
            vec.push(tmp.val);
            if(tmp.left)
                que.push(tmp.left);
            if(tmp.right)
                que.push(tmp.right);
        }
        res.push(vec);
    }
    return res;
}