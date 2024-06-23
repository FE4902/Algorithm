const solution = (n, m) => {
    const gcd = (num1, num2) => {
        let temp = 0;
        while(num2 !== 0){
            temp = num1 % num2;
            num1 = num2;
            num2 = temp;
        }
        
        return num1;
    }

    const lcm = (num1, num2) => {
        return num1 * num2 / gcd(num1, num2);
    }

    return [gcd(n, m), lcm(n, m)]
}

