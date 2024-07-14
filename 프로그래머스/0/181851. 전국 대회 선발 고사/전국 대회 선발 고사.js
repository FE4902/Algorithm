function solution(rank, attendance) {
    let array = [...rank];
    array = array.filter((v, i) => attendance[i] && v).sort((a, b) => a - b).slice(0, 3).map(v => {
        return rank.indexOf(v);
    });
    
    return 10000 * array[0] + 100 * array[1] + array[2];
}