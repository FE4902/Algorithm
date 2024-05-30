const solution = (num, total) => {
    let answer = [];
    let array = new Array(1100).fill(0).map((_, i) => i - 100);

    for(let i = 0; i < array.length; i++){
        const sliceArray = [...array].slice(i, i + num);

        if(sliceArray.reduce((a, c) => a + c, 0) === total){
            answer = [...sliceArray];
        }
    }

    return answer;
}