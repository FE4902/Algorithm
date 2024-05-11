function solution(A,B){
    let array = [];
    const minArray = A.sort((a, b) => a - b);
    const maxArray = B.sort((a, b) => b - a);
    
    for(let i = 0; i < maxArray.length; i++){
        array.push(minArray[i] * maxArray[i]);
    }

    return array.reduce((a, c) => a + c, 0);
}