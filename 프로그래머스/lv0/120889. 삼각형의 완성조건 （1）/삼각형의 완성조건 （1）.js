function solution(sides) {
    var array = sides.sort((a, b) => {return a - b});
    return array[2] < array[0] + array[1] ? 1 : 2;
    
}