function solution(n, k) {
    let answer = [];
    for (let i = 1; i * k <= n; i++){
        n / (i * k) >= 1 ? answer.push(i * k) : '';
    }
    return answer;
}