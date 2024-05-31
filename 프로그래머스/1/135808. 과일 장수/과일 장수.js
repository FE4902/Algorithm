const solution = (k, m, score) => {
    let array = score.sort((a, b) => b - a);
    let answer = [];

    for(let i = 0; i < score.length; i += m){
        answer.push(array.slice(i, i + m));
    }

    return answer.filter(v => v.length === m).map(v => v = Math.min(...v) * m).reduce((a, c) => a + c, 0);
}