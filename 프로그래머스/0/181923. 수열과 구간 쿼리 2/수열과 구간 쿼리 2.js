function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(v => {
        const [s, e, k] = v;
        
        const filterArr = arr.filter((y, i) => {
            if(s <= i && i <= e && k < y){
                return y;
            }
        });
        
        answer.push(filterArr.length ? Math.min(...filterArr) : -1);
    })
    
    return answer;
}