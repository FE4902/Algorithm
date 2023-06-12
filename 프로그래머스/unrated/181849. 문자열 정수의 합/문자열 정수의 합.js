function solution(num_str) {
    return [...num_str].reduce((t, v) => t + Number(v), 0)
}