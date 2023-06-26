function solution(num_list) {
    return (+num_list.filter(v => v % 2 === 0).join('')) + (+num_list.filter(v => v % 2 !== 0).join(''));
}