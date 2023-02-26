function solution(n) {
    return Number([...n.toString()].map(v => Number(v)).sort((a, b) => b - a).join(''));
}