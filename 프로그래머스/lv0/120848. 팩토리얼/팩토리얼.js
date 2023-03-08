function solution(n) {
    let s = 1;
    let answer = 0;
    for(let i = 1; s <= n; i++){
        s *= i;
        answer = i;
    }
    return answer - 1;
}