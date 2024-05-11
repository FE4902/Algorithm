function solution(s) {
    let array = s.split(' ').map(Number);
    
    return `${Math.min(...array)} ${Math.max(...array)}`;
}