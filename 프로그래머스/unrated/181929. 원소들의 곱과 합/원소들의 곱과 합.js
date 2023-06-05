function solution(num_list) {
    const A = num_list.reduce((total, val) => total * val, 1);
    const B = Math.pow(num_list.reduce((total, val) => total + val, 0), 2);
    
    return A < B ? 1 : 0;
}