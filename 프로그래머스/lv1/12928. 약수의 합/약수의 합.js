function solution(n) {
    const array = [];

    for(let i = 1; i <= n; i++){
        n % i === 0 && array.push(i)
    }
    
    return array.reduce((a, c) => a + c, 0);
}