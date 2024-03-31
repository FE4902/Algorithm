function solution(score) {
    const sumArray = score.map(v => v[0] + v[1]);
    const sortArray = [...sumArray].sort((a, b) => b - a);
    
    return sumArray.map((v) => sortArray.indexOf(v) + 1);
}