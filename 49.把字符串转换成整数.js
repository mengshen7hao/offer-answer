//49.把字符串转换成整数
function StrToInt(str){
    // write code here
    //return Number(str)?parseInt(str):0
    let res = 0,flag = 1;
    if (!str.length) return 0;
    if (str[0] === '-')  flag = -1;
    for (let i=str[0]==='+'||str[0]==='-'?1:0;i<str.length;i++) {
        if (!(str[i]>='0'&&str[i]<='9')) return 0;
        res=(res<<1)+(res<<3)+(str[i]-'0');
    }
    return res * flag;
}