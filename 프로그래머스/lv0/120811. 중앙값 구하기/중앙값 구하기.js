function solution(array) {
    const arraySort = array.sort(function(a, b) {
        return a - b;           
    })
    return arraySort[Math.floor(array.length / 2)];
}