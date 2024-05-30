function solution(k, score) {
    let answer = [];
    let array = [];
    const num = k - 1;
    
    score.forEach(v => {
        array.push(v);
                
        if(array.length === 1) {
            answer.push(v)
        } else {
            answer.push(array.sort((a, b) => b - a)[array.length <= num ? array.length - 1 : num]);
        }
    });
    
    return answer;
}