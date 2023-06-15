function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const secondToLast = num_list[num_list.length - 2];
    return [...num_list, secondToLast < last ? last - secondToLast : last * 2];
}