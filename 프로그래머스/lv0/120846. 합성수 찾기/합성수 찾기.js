function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++){
        let array = [];
        
        for(let j = 1; j <= i; j++){
            i % j === 0 ? array.push(j) : '';   
        }
        
        array.length > 2 ? answer++ : '';
    }
    
    return answer;
}