function solution(hp) {
    const big = Math.floor(hp / 5);
    const midium = Math.floor(hp % 5 / 3);
    const small = Math.floor(hp % 5 % 3);
    
    return big + midium + small;
}