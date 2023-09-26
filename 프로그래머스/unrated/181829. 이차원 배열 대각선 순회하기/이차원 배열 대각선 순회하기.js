function solution(board, k) {
    let answer = 0;
    
    board.forEach((v, i) => v.forEach((_, j) => {
        if(i + j <= k) {
            answer += board[i][j]
        }
    }));
    
    return answer;
}