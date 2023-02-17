function solution(my_string) {
    var answer = 0;
    my_string.split('').forEach((value) => {
        if(!isNaN(value)){
            answer += Number(value);
        } 
    });
    return answer;
}