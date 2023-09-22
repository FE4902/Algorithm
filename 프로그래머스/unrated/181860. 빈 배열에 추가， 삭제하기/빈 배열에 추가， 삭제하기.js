function solution(arr, flag) {
    let X = [];
    
    for(let i = 0; i < arr.length; i++){
        
        if(flag[i]) {
            let count = 1;
            
            while(count <= arr[i] * 2){
                X.push(arr[i]);
                count++;
            }
        } else{
            let count = 1;
            
            while(count <= arr[i]){
                X.pop();
                count++;
            }
        }
        
    }
    
    return X;
}