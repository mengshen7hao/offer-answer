//52.正则表达式匹配
function match(s, pattern){
    // write code here
    if(pattern === '.*') return true;
    if(s === '') return pattern === '' || (pattern.length === 2 && pattern[1] === '*');
    if(pattern[1] === '*') {
        if(s[0] === pattern[0] || pattern[0] === '.') {
            return match(s, pattern.substr(2)) || match(s.substr(1), pattern);
        }
        return match(s,pattern.substr(2));
    }
    if (pattern[0] === '.'||s[0] === pattern[0]) {
        return match(s.substr(1), pattern.substr(1));
    }
    return false;
}