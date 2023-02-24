function solution(age) {
    const abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    return [...age.toString()].map(v => abcArray[v]).join('');
}