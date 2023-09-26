function solution(n) {
    let answer = [];
    
    for (let i = 0; i < n; i++){
        let arr = [];
        
        for(let j = 0; j < n; j++){
            i !== j ? arr.push(0) : arr.push(1);
        }
        
        answer.push(arr);
    }
    
    return answer;
}