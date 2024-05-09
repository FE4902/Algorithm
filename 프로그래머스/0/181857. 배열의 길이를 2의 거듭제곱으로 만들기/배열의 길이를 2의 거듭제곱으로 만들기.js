function solution(arr) {
    let i = 0;
    while(Math.pow(2, i) !== arr.length){
        if(Math.pow(2, i) < arr.length){
            i++;
        } else{
            arr.push(0);       
        }
    }
        
    return arr;
}