const solution = (board) => {
    let array = Array(board.length).fill([]).map(v => Array(board.length).fill(0));
    const dangerRange = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];

    for(let i in board){
        for(let j in board[i]){
            if(board[i][j] === 1){
                for(let k of dangerRange) {
                    if(+i + k[0] >= 0 && +i + k[0] < board.length && +j + k[1] >= 0 && +j + k[1] < board.length){
                        array[+i + k[0]][+j + k[1]]++;
                    }
                }
            }
        }
    }

    return array.join(',').split(',').filter(v => +v === 0).length;
}