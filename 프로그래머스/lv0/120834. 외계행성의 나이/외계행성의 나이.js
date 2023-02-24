function solution(age) {
    return [...age.toString()].map(v => 'abcdefghij'[v]).join('');
}