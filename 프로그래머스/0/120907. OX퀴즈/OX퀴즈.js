const solution = (quiz) => {
    let answer = [];

    for(let i of quiz) {
        const array = i.split(' ');
        const result = array[1] === "+" ? +array[0] + +array[2] : +array[0] - +array[2];
        
        answer.push(result == array[4] ? 'O' : 'X');
    }

    return answer;
}