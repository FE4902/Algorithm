function solution(common) {
    const reverse = common.reverse();
    
    if (reverse[0] - reverse[1] === reverse[1] - reverse[2]){
        return reverse[0] + reverse[0] - reverse[1];
    } else {
        return reverse[0] * (reverse[0] / reverse[1]);
    }
}