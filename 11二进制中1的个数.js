//11.二进制中1的个数
//输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示.
function NumberOf1(n){
    // write code here
        var c=0;
        while (n){
            if(n&1) {c++}
            n = n >>> 1;
        }
        return c;
}