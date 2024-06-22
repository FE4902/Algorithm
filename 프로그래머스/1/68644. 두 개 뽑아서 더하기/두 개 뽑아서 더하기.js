function solution(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let v = i + 1; v < numbers.length; v++) {
            if(!array.includes(numbers[i] + numbers[v])){
                array.push(numbers[i] + numbers[v])                 
            }
        }
    }
    return array.sort((a, b) => a - b);
}