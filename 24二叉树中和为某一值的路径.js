//24.二叉树中和为某一值的路径
let r,p
function FindPath(root, expectNumber){
    // write code here
    r = []
    p = []
    if(!root){return r};
    cal(root,expectNumber)
    return p
}
function cal(root,exp){
    r.push(root.val);
    if(root.val == exp && !root.left&& !root.right){
        p.push(r.slice())
    }else{
        if(root.left) cal(root.left,exp - root.val);
        if(root.right) cal(root.right,exp - root.val);
    }
    r.pop()
} 