//54.字符流中第一个不重复的字符
let arr = []
//Init module if you need
function Init(){
    // write code here
    arr = [];
}
//Insert one char from stringstream
function Insert(ch){
    // write code here
    if(arr.indexOf(ch)<0){
        arr.push(ch)
    }else{
        let index = arr.indexOf(ch)
        arr.splice(index,1)
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce(){
    // write code here
    if(arr.length){
        return arr[0]
    }else{
        return '#'
    }
}