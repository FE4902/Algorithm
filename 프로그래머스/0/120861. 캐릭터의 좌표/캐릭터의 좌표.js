function solution(keyinput, board) {
    let answer = [0, 0];
    
    for(let s of keyinput) {
        switch(s) {
            case 'up' : answer[1] + 1 < board[1] / 2 && answer[1]++; break;
            case 'down' : answer[1] - 1 > ~(board[1] / 2) && answer[1]--; break;
            case 'left' : answer[0] - 1 > ~(board[0] / 2) && answer[0]--; break;
            case 'right' : answer[0] + 1 < board[0] / 2 && answer[0]++; break;
        }
    }
    
    return answer;
}