function solution(arr, k) {
    let s = new Set(arr);
    let answer = [...s];
    
    const i = s.size - k;
    while(answer.length !== k){
        i < 0 ? answer.push(-1) : answer.pop();
    }
    
    return answer;
}