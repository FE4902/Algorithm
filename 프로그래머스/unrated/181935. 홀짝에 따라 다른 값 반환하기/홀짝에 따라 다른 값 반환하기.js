function solution(n) {
    const array = [];
    const number = n % 2 ? 1 : 2;
    
    for (let i = number; i <= n; i += 2){
        array.push(i)
    }
    
    return array.reduce((a, c) => a + Math.pow(c, number), 0);
}