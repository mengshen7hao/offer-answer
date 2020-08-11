//5.用两个栈实现一个队列
//用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
//链接：https://blog.csdn.net/ailunlee/article/details/85100514
let a = [];
let b = [];
function push(node){
    // write code here
    a.push(node)
}
function pop(){
    // write code here
    if(b.length==0){ //当b空的时候
        while(a.length){
            b.push(a.pop())
        } 
    }
    return b.pop()  //b空和不空的时候
}