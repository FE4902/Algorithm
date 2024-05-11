function solution(n) {
    let array = [0, 1];
    
    for(let i = 2; i <= n; i++){
        array.push(BigInt(array[i - 2]) + BigInt(array[i - 1]));
    }
    
    return array[n] % BigInt(1234567);
}