function solution(i, j, k) {
    let n = j + 1;
    let count = 0;
    Array(n).fill().map((_, n) => n).slice(i).forEach(v => {
        [...v.toString()].forEach(e => {Number(e) === k ? count++ : ''})
    });
    return count;
}