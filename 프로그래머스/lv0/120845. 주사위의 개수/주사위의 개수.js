function solution(box, n) {
    return box.map(v => Math.floor(v / n)).reduce((total, value) => total * value, 1);
}