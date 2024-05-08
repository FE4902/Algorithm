const factorial = (number) => {
    let result = BigInt(1);        
    
    for(let i = 1; i <= number; i++){
        result *= BigInt(i);
    }
        
    return result;
}

const solution = (balls, share) => {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}