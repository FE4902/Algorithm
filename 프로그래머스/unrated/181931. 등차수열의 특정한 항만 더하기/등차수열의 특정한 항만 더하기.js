function solution(a, d, included) {
    let arr = [];
    
    for(let i = 0; i < included.length; i++){
        arr.push(a + (d * i));    
    }
        
    return arr.map((v, i) => included[i] === true ? v : '').reduce((a, c) => +a + +c, 0);
}