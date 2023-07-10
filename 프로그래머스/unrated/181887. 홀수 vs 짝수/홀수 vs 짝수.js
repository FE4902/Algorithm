function solution(num_list) {
    let odd = 0; // 홀수
    let even = 0; // 짝수
    
    num_list.forEach((v, i) => 
        i % 2 === 0 ? odd += v : even += v
    )
    
    return Math.max(odd, even);
}