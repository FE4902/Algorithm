function solution(n) {
    return [...Array(n).fill().map((v, i) => {return i})].filter(v => n % v === 1).sort((a, b) => a - b)[0];
}