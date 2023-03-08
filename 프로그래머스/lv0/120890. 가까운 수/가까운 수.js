function solution(array, n) {
    array.sort();
    let diff = Infinity;
    let result = 0;

    for (let i of array) {
        if (Math.abs(n - i) < diff) {
            diff = Math.abs(n - i);
            result = i;
        }
    }

    return result;
}