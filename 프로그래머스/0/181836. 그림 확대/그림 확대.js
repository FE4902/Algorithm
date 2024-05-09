function solution(picture, k) {
    let answer = [];
    
    picture.forEach((v) => {
        for(let i = 0; i < k; i++){
            answer.push([...v].map((y) => y.repeat(k)).join(''));
        }
    })
    
    return answer;
}