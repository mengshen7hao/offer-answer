//输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
function Permutation(str){
    // write code here
    let res=[]
    if(str.length<=1){return str}
    let flag={}
    for(let i=0;i<str.length;i++){
        let s=str[i]
        if(!flag[s]){
            let newstr=str.slice(0,i)+str.slice(i+1,str.length)
            let l=Permutation(newstr)
            for(let j=0;j<l.length;j++){
                let temp=s+l[j]
                res.push(temp)
            }
             flag[s]=true
        }
    }
    return res
}