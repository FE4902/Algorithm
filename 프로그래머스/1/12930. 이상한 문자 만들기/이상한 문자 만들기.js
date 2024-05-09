function solution(s) {
    let answer = s.split(' ').map(v => {
        return [...v].map((y, i) => i % 2 === 0 ? y.toUpperCase() : y.toLowerCase()).join('');
    }).join(' ');
    
    return answer;
}