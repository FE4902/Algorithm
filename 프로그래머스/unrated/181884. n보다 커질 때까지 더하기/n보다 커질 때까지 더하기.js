function solution(numbers, n) {
    let answer = 0;
    for (let i = 0; numbers.length > i; i++) {
        answer = numbers[i] + answer;
        if (answer > n) {
            break;
        }
    }
    return answer;
}