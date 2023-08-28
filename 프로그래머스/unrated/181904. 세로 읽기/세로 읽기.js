function solution(my_string, m, c) {
    let pre = 0;
    let answer = [];
    
    for (let i = m; i <= my_string.length; i += m){
        answer.push(my_string.slice(pre, i))
        pre += m;
    }
    
    return answer.map((v) => v[c - 1]).join('');
}