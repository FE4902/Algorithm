function solution(my_string) {
    const answer = my_string.split('').map(Number).filter(v => !isNaN(v)).sort((a, b) => a-b)
    
    return answer;
}