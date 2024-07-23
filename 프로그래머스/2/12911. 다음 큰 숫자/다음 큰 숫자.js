function solution(n) {
    const numberCount = (v) => {
        return v.toString(2).split('').filter(v => v === '1').length;
    }
    
    let i = n + 1;
    while(numberCount(n) !== numberCount(i)){
        i++;
    }
    
    return i;
}