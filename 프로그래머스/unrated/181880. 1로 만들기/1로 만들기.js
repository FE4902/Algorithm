function solution(num_list) {
    let answer = 0;
    
    num_list.forEach(v => {
        let i = 0;
        
        while(v !== 1){
            v % 2 === 0 ? v /= 2 : v = (v - 1) / 2;
            i++;
        }
        
        answer += i;
    })
    
    return answer;
}