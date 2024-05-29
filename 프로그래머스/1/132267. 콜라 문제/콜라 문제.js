const solution = (a, b, n) => {
    let answer = 0;
    let bottle = n;
    
    while(bottle >= a){
        const temp = bottle % a;
        bottle = Math.floor(bottle / a) * b;
        
        answer += bottle;
        bottle += temp;
    }

    return Math.round(answer);
}