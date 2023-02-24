function solution(numbers) {
    const array = [];
    numbers.map((v, idx) => {for(let i = idx + 1; i < numbers.length; i++) {
         array.push(v * numbers[i]);
    }})
    return Math.max(...array);
}