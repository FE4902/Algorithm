function solution(my_string, index_list) {
    const array = []
    index_list.forEach(v => {
         array.push(my_string[v]);
    });
    return array.join('');
}