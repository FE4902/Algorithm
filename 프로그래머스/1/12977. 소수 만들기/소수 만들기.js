const solution = (nums) => {
    let answer = 0;

    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                const n = nums[i] + nums[j] + nums[k];

                let count = 0;
                for(let l = 2; l < n; l++){
                    if(n % l === 0) {
                        count++;
                    };
                }
                
                if(count === 0) {
                    answer++;
                };
            }
        }
    }

    return answer;
}
