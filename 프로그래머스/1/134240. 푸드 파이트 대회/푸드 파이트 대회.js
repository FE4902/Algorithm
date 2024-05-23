const solution = (food) => {
    let array = [];

    food.forEach((v, i) => {
        for(let j = 0; j < Math.floor(v / 2); j++){
            array.push(i);
        }
    })
        
    return [...array, 0, ...array.reverse()].join('');
}