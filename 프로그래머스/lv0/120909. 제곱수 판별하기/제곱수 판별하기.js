function solution(n) {
    for(let i = 0; i <= n; i++){
        if(Math.pow(i, 2) == n){
            return 1;
        }
    }
    return 2;
}