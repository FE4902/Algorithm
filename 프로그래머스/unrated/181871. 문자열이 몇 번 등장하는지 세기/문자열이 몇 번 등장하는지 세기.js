function solution(myString, pat) {
    let counter = 0;
    
    for(let i = 0; i < myString.length - pat.length + 1; i++){
        pat === myString.slice(i, i + pat.length) ? counter++ : '';
    }
    
    return counter;
}