function solution(s) {
    let array = s.toString();
    let count = 0;
    let zero = 0;
    
    while(array.length !== 1){
        let FILTER = [...array].filter(v => v == 1);
        
        count += 1;
        zero += [...array].length - FILTER.length;
        array = FILTER.join('').length.toString(2);
    }
    
    return [count, zero];
}