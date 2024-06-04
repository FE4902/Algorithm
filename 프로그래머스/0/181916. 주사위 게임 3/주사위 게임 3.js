const solution = (a, b, c, d) => {
    const array = [a, b, c, d].sort((a, b) => b - a);

    if(array[0] === array[3]){
        return array[0] * 1111;
    }
    
    if(array[0] === array[2]){
        return Math.pow(10 * array[0] + array[3], 2);
    } else if(array[1] === array[3]) {
        return Math.pow(10 * array[3] + array[0], 2);
    }
    
    if(array[0] === array[1] && array[2] === array[3]){
        return (array[0] + array[3]) * Math.abs(array[0] - array[3]);
    }
    
    if(array[0] === array[1]){
        return array[2] * array[3];
    } else if(array[1] === array[2]){
        return array[0] * array[3];
    } else if(array[2] === array[3]){
        return array[0] * array[1];
    }

    return array[3];
}
