function solution(arr, divisor) {
    const array = arr.filter(v => v % divisor === 0);
    return array.length <= 0 ? [-1] : array.sort((a, b) => a - b);
}