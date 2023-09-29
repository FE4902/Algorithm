function solution(arr) {
    const answer = [];
    
    arr.reduce((a, c) => {
        if(a !== c){
            answer.push(c);
        }
        
        return c;
    }, '')
    
    return answer;
}