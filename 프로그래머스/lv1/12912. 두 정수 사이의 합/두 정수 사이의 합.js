function solution(a, b) {
    const array = [];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++){
        array.push(i);
    }
    return array.reduce((a, c) => a + c, 0);
}