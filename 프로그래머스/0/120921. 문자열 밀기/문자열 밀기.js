function solution(A, B) {
    if(A === B) return 0;
    
    let array = [...A];
    let count = 0;
    
    while(array.join('') != B){
        if(count > array.length){
            count = -1;
            break;
        }
        
        const last = array.pop();
        array.unshift(last);
        
        count++;
    }
    
    return count;
}