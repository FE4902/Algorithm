const solution = (name, yearning, photo) => {
    let answer = [];

    for(let i of photo){
        let count = 0;
        
        for(let j of i){
            if(name.indexOf(j) > -1){
                count += yearning[name.indexOf(j)]
            };
        }

        answer.push(count);
    }

    return answer;
}