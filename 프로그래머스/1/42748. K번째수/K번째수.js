const solution = (array, commands) => {
    const answer = [];

    for(let i of commands) {
        let [x, y, z] = i;
        
        answer.push([...array].slice(x - 1, y).sort((a, b) => a - b)[z - 1]);
    }

    return answer;
}