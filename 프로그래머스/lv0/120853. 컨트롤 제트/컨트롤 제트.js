function solution(s) {
    let prev = 0;
    let sum = 0;
    s.split(' ').forEach((v) => { 
        if(v === 'Z'){
            sum -= prev
        } else { 
            sum += Number(v);
            prev = Number(v);
        }
    });
    return sum;
}