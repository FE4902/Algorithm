function solution(arr, queries) {
    let answer = [...arr];
    
    queries.forEach(v => {
        let array = [...answer];
        
        answer.splice(v[0], 1, array[v[1]]);
        answer.splice(v[1], 1, array[v[0]]);        
    })
    
    return answer;
}