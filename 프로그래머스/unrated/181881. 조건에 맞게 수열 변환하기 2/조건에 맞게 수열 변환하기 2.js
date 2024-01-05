function solution(arr) {
    let beforeArr = [];
    let i = 0;
    
    while(JSON.stringify(arr) !== JSON.stringify(beforeArr)) {
        beforeArr = [...arr];
    
        arr = arr.map((v) => {  
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } 
            if (v < 50 && v % 2 !== 0) {
                return v * 2 + 1;
            }
            return v;
        })

        i++;
    }
            
    return i - 1;
}