function solution(s) {
    const array = [...s];
    return array.length % 2 === 0 ? array[(array.length / 2) - 1] + array[array.length / 2] : array[Math.floor(array.length / 2)]
}