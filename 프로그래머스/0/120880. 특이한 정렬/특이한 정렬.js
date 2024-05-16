function solution(numlist, n) {    
    return numlist.map(v => v - n).sort((a, b) => {
        return Math.abs(a) !== Math.abs(b) ? Math.abs(a) - Math.abs(b) : b - a
    }).map(v => v + n);
}