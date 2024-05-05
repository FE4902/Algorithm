function solution(my_string, queries) {
    let word = [...my_string]; // 문자열을 배열로 변환

    queries.forEach(v => {
        const [s, e] = v;
        const sliceWord = word.slice(s, e + 1).reverse();
        
        word.splice(s, e - s + 1, ...sliceWord);
    });
    
    return word.join('');
}
