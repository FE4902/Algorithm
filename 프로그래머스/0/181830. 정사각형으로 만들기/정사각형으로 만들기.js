function solution(arr) {
    if(arr[0].length > arr.length) {
        while(arr[0].length !== arr.length) {
            arr.push(Array(arr[0].length).fill(0));
        }
    } else if(arr[0].length < arr.length) {
        while(arr[0].length !== arr.length) {
            arr.map(v => v.push(0));
        }
    }
    
    return arr;
}