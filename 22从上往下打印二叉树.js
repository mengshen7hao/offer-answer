//22.从上往下打印二叉树
function PrintFromTopToBottom(root){
    // write code here
    let arr=[];
    let data=[];
    if(root){arr.push(root)}
    while(arr.length){
        let node=arr.shift();
        if(node.left){
            arr.push(node.left);
        }
        if(node.right){
            arr.push(node.right);
        }
        data.push(node.val);
    }
    return data;
}